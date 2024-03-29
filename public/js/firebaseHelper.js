/**Имя базы данных*/
const DBASE = firebase.firestore();

//Новые const для новой БД:
const TABLE_UNITS = "units";

const TABLE_EVENTS = "events"; //в прошлом states
const EVENT_DATE = "date";
const EVENT_UNIT = "unit_id";

const ANY_VALUE = "any_value";
const STATE_PREF = "state_";
const DESCENDING = "desc";



/** Класс для устройства, или блока детектирования */
class DUnit {
    constructor(id, description, device_id, employee_id, inner_serial, location_id, serial, state_id, type_id, date, close_date, trackid) {
        this.id = id;
        this.description = description;
        this.device_id = device_id;
        this.employee_id = employee_id;
        this.inner_serial = inner_serial;
        this.location_id = location_id;
        this.serial = serial;
        this.state_id = state_id;
        this.type_id = type_id;
        this.date = date;
        this.close_date = close_date;
        this.trackid = trackid;
    }

    toString() {
        return this.id + ', ' +
            this.description + ', ' +
            this.device_id + ', ' +
            this.employee_id + ', ' +
            this.inner_serial + ', ' +
            this.location_id + ', ' +
            this.serial + ', ' +
            this.state_id + ', ' +
            this.type_id + ', ' +
            this.date + ', ' +
            this.close_date + ', ' +
            this.trackid;
    }
}

/** Firestore data converter. Нужен для загрузки из БД объекта класса DUnit */
let dUnitConverter = {
    toFirestore: function (dunit) {
        console.log('CONVERTER - '+dunit.close_date);
        return {
            id: dunit.id,
            description: dunit.description,
            device_id: dunit.device_id,
            employee_id: dunit.employee_id,
            inner_serial: dunit.inner_serial,
            location_id: dunit.location_id,
            serial: dunit.serial,
            state_id: dunit.state_id,
            type_id: dunit.type_id,
            date: dunit.date,
            close_date: dunit.close_date,
            trackid: dunit.trackid
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new DUnit(data.id, data.description, data.device_id, data.employee_id, data.inner_serial, data.location_id, data.serial, data.state_id, data.type_id, data.date, data.close_date, data.trackid);
    }
};

/**Класс статусов. Содержит сам статус и его дату*/
class DEvent {
    constructor(date, description, location_id, state_id, unit_id) {
        this.date = date;
        this.description = description;
        this.location_id = location_id;
        this.state_id = state_id;
        this.unit_id = unit_id;
    }

    toString() {
        return this.date + ', ' +
            this.description + ', ' +
            this.location_id + ', ' +
            this.state_id + ', ' +
            this.unit_id;
    }
}

/** Firestore data converter. Нужен для загрузки из БД объекта класса dState */
let dEventConverter = {
    toFirestore: function (dEvent) {
        return {
            date: dEvent.date,
            description: dEvent.description,
            location_id: dEvent.location_id,
            state_id: dEvent.state_id,
            unit_id: dEvent.unit_id
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new DEvent(data.date, data.description, data.location_id, data.state_id, data.unit_id);
    }
}

//**********************************************************************************************************************

const REPAIR_TYPE = "repair_type";

function startSearchAllRepairOnly(trackid_id) {
    let trackid = valueOfElement(trackid_id);
    if (trackid==="") insertNothing('row_table');
    else getUnitListByParam(ANY_VALUE, ANY_VALUE, ANY_VALUE, REPAIR_TYPE, ANY_VALUE, ANY_VALUE, trackid);
}

/**Показывает/скрывает список всех событий для выбранного юнита*/
function getAllEventsByUnitIdSmall(unit_id) {
    let host = STATE_PREF + unit_id;
    let size = document.getElementById(host).innerHTML.length;
    console.log(size);
    //если список событий не показан, то показать, если уже показывается (size!==0), то очищаем (удаляем) список
    if (size === 0) getAllEventsByUnitId_new(DBASE, TABLE_EVENTS, EVENT_UNIT, unit_id, addCollectionOfDocumentToDiv_new, EVENT_DATE, DESCENDING, host);
    else document.getElementById(host).innerHTML = '';
}
