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
        resolve('conexão');
    });
}