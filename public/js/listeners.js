
const EMPTY_VALUE = "- - -";



function getIdByName(name, nameList, idList) {
    let position = nameList.indexOf(name);
    if (position===-1) return EMPTY_VALUE;
    else return idList[position];
}

function getNameById(id, nameList, idList) {
    let position = idList.indexOf(id);
    if (position===-1) return EMPTY_VALUE;
    else return nameList[position];
}

// ---------------------------------------------------------------------------------------------------------------------
let deviceIdList = [];
let deviceNameList = [];
let locationIdList = [];
let locationNameList = [];
let stateIdList = [];
let stateNameList = [];
let employeeIdList = [];
let employeeNameList = [];
// ---------------------------------------------------------------------------------------------------------------------
/**Лисенер для списка имен устройств*/
listen(DBASE, TABLE_DEVICES, insertDevNames);

function insertDevNames(arr_name, arr_id) {
    deviceNameList = arr_name;
    deviceIdList = arr_id;
}
// ---------------------------------------------------------------------------------------------------------------------
/**Лисенер для локаций*/
listen(DBASE, TABLE_LOCATIONS, insertLocationsNames);

function insertLocationsNames(arr_name, arr_id) {
    locationNameList = arr_name;
    locationIdList = arr_id;
}
// ---------------------------------------------------------------------------------------------------------------------
/**Лисенер для статусов*/
listen(DBASE, TABLE_STATES, insertStatesNames);

function insertStatesNames(arr_name, arr_id) {
    stateNameList = arr_name;
    stateIdList = arr_id;
}
// ---------------------------------------------------------------------------------------------------------------------
/**Лисенер для сотрудников*/
listen(DBASE, TABLE_EMPLOYEES, insertEmployeesNames);

function insertEmployeesNames(arr_name, arr_id) {
    employeeNameList = arr_name;
    employeeIdList = arr_id;
}
