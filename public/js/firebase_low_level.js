/**Низкоуровневые методы для работы с БД. Приложение не работает с этими методами напрямую, а использует промежуточный класс (firebaseHelper).
 * Методы ничего не знают про приложение, не знают как называется БД и из каких таблиц (коллекций) состоит. Само приложение не в курсе, как работать с БД,
 * общается через firebaseHelper. Полная инкапсуляция. */

/**Лисенер для коллекции БД. Суть такого лисенера: следит за изменениями в коллекции, при ивенте загружает из коллекции
 * список всех имен и список всех идентификаторов. Оба списка передает через "этой функции", которая уже занимается
 * сохранением списков и формированием из них спинеров*/
function listen(database, table, func) {
    database.collection(table)
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                console.log(change.doc.data());
                getPairedCollectionFromDB(table, function (arr_id, arr_name) {
                    func(arr_name, arr_id); //Эта функция
                });
            });
        });
}

function getAllEventsByUnitId_new(database, table, param, value, func, orderBy, order, host){
    let arr = [];
    database.collection(table)
        .where(param, "==", value)
        .orderBy(orderBy, order)
        .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let event = new DEvent(doc.data().date, doc.data().description, doc.data().location_id, doc.data().state_id, doc.data().unit_id);
            arr.push(event);
        });
        console.log(arr.length);
        func(arr, host);
    });
}

//todo кроме ANY_VALUE добавить ещё null и ""
/**Получить все объекты из коллекции, совпадающие по параметрам. Если значение параметра равно ANY_VALUE,
 * то этот параметр будет проигнорирован при поиске*/
function getAllUnitsByParam(database, table, converter,
                            param_1, value_1,
                            param_2, value_2,
                            param_3, value_3,
                            param_4, value_4,
                            param_5, value_5,
                            param_6, value_6,
                            func) {
    let query = database.collection(table).withConverter(converter);
    if (value_1 !== ANY_VALUE) query = query.where(param_1, "==", value_1)
    if (value_2 !== ANY_VALUE) query = query.where(param_2, "==", value_2)
    if (value_3 !== ANY_VALUE) query = query.where(param_3, "==", value_3)
    if (value_4 !== ANY_VALUE) query = query.where(param_4, "==", value_4)
    if (value_5 !== ANY_VALUE) query = query.where(param_5, "==", value_5)
    if (value_6 !== ANY_VALUE) query = query.where(param_6, "==", value_6)

    let arr = [];
    query.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // Convert to object
            obj = doc.data();
            arr.push(obj);
        });
        func(arr);
    });
}


function getPairedCollectionFromDB(table, func) {
    let arr_id = [];
    let arr_name = [];
    DBASE.collection(table)
        .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            arr_id.push(doc.data().id);
            arr_name.push(doc.data().name);
        });
        func(arr_id, arr_name);
    });
}

function valueOf(id) {
    return document.getElementById(id).value
}
