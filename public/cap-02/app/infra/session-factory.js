export class SessionFactory {

    constructor(config) {
        this.dbName = config.dbName;
        this.dbVersion = config.dbVersion;
        this.store = new Map();
        config.mappers.forEach(mapper => {
            this.store.set(
                mapper.clazz.name,
                mapper.converter
            );
        });

        console.log(this.store);
    }

    async openSession() {
        const connection = await createConnection(
            this.dbName,
            this.dbVersion,
            this.stores
        );

        return new Session(connection, this.stores)
    }
}

class Session {

    constructor(connection, stores) {
        this.connection = connection;
        this.stores = stores;
    }
}

function createConnection(dbName, dbVersion, stores) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(dbName, dbVersion);
        request.onupgradeneeded = e => {
            const transactionalConnection = e.target.result;
            for ([key, value] of stores) {
                const store = key;

                if (transactionalConnection.objectStoreNames.contains(store)) {
                    transactionalConnection.deleteObjectStore(store);
                }

                transactionalConnection.createObjectStore(store, { autoIncrement: true });
            }
        };

        request.onsuccess = e => {
            const connection = e.target.result;
            resolve(connection);
        };
        
        request.onerror = e => {
            console.log(e.target.error);
            reject(`Não foi possível obter a conexão com o banco ${dbVersion}`)
        }
    });
}