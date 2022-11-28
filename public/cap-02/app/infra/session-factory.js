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

    openSession() {
        
    }
}