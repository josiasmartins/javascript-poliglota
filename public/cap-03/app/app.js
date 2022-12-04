import { ActiveRecord } from './infra/active-record';


(async () => {
    await new ActiveRecord({
        dbName: 'db-ar',
        version: 1,
        mappers: [
            {
                clazz: Person,
                converter: data => new Person(data.name, data.surname)
            },
            {
                clazz: Animal,
                converter: data => new Animal(data.name)
            }
        ]
    })
    .init()
})();