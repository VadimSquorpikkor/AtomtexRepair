const NOTHING_FOUND = "nothing_found"
const NO_STATES_FOUND = "no_states_found"
const SERIAL = "serial"
const DAYS_UNDER_REPAIR = "days_under_repair"
const ACCEPTED_TO_REPAIR = "accepted_for_repair"

function valueOfElement(id) {
    return document.getElementById(id).value
}

function rightDayString(i) {
    if (i===11||i===12||i===13||i===14)return "дней";
    switch (i%10) {
        case 1:return "день";
        case 2:
        case 3:
        case 4:return "дня";
        default:return "дней";
    }
}


let idDictionary  = [NOTHING_FOUND,                 NO_STATES_FOUND,         SERIAL,            DAYS_UNDER_REPAIR,      ACCEPTED_TO_REPAIR];
let rusDictionary = ['Ничего не найдено',           'Событий не найдено',    'Серийный номер',  'Дней в ремонте',       'Принят в ремонт'];
let engDictionary = ['Nothing found',               'No events found',       'Serial number',   'Days under repair',    'Accepted for repair'];
let zhnDictionary = ['没有发现',                     '找不到事件',              '序列号',          '维修天数',               '接受维修'];
let itaDictionary = ['Non abbiamo trovato nulla',   'Nessun evento trovato', 'Numero di serie', 'Giorni in riparazione','Accettato per la riparazione'];

function getRightLanguage(id) {
    switch (language) {
        case LANG_RUSSIAN: return getNameById(id, rusDictionary, idDictionary);
        case LANG_ENGLISH: return getNameById(id, engDictionary, idDictionary);
        case LANG_CHINESE: return getNameById(id, zhnDictionary, idDictionary);
        case LANG_ITALIAN: return getNameById(id, itaDictionary, idDictionary);
    }
}

function addSerialDataRowToPage(arr) {
    if (arr.length === 0) insertNothing('row_table');
    else if (document.getElementById('row_table') != null) {

        document.getElementById('main_logo').style.display = "none";

        let unit;
        let data = '';
        for (let i = 0; i < arr.length; i++) {
            console.log(i);
            unit = arr[i];

            let now_date = new Date();
            let daysCount = (now_date.getTime() - unit.date.toDate().getTime()) / (1000*60*60*24);
            daysCount = Math.round(daysCount);

            let stateDate = unit.date.toDate().toLocaleDateString('ru-RU'); //Дата - 18.03.2021
            let stateTime = unit.date.toDate().toLocaleTimeString('ru-RU'); //Время - 09:07:49
            let deviceName = unit.device_id;
            let serial = unit.serial;
            let innerSerial = unit.inner_serial;
            let date = stateDate + " " + stateTime;
            let state = unit.state_id;
            let location = unit.location_id;
            let dayString = rightDayString(daysCount);

            deviceName = getNameById(deviceName, deviceNameList, deviceIdList);
            state = getNameById(state, stateNameList, stateIdList);
            location = getNameById(location, locationNameList, locationIdList);

            data +=
            '<div class="found_unit_item" onclick=getAllEventsByUnitIdSmall("'+unit.id+'")>'+
            '    <div class="item_info_div">'+
            '        <span class="big_orange">'+ deviceName +'</span><br>'+
            '        <span class="small_white">'+ getRightLanguage(SERIAL) + ' — ' + serial +'</span><br>'+
            // '        <span class="small_white">(вн. '+ innerSerial +')</span><br>'+
            '        <span class="big_orange">'+ location +'</span><br>'+
            '        <span class="small_white">'+ state +'</span>'+
            '    </div>'+
            '    <div class="day_count_div">'+
            '        <span class="small_white">'+ getRightLanguage(ACCEPTED_TO_REPAIR) +':</span><br>'+
            '        <span class="small_white">'+ date +'</span><br>'+
            // '        <span class="small_white">'+ dayString +'</span>'+
            '        <span class="small_white">'+ getRightLanguage(DAYS_UNDER_REPAIR) +':</span><br>'+
            '        <span class="big_orange">'+ daysCount +'</span>'+
            '    </div>'+
            '    <div id="'+STATE_PREF+unit.id+'" class="state_host"></div>'+
            '</div>';
        }

        document.getElementById('row_table').innerHTML = '' + data;
    }
}



/**Вставляет <SPAN> "Не найдено" в выбранный по id элемент
 *
 * @param id - id элемента, в который будет вставлено "Не найдено"
 */
function insertNothing(id) {
    document.getElementById(id).innerHTML = '<span class="white_span">'+getRightLanguage(NOTHING_FOUND)+'</span>'
}

function addCollectionOfDocumentToDiv_new(arr, host) {
    let data;
    if (arr.length === 0) {
        document.getElementById(host).innerHTML =
            '<span class="white_span">'+getRightLanguage(NO_STATES_FOUND)+'</span>';
    } else {
        let event;
        data = '';
        for (let i = 0; i < arr.length; i++) {
            event = arr[i];

            let stateDate = event.date.toDate().toLocaleDateString('ru-RU'); //Дата - 18.03.2021
            let stateTime = event.date.toDate().toLocaleTimeString('ru-RU'); //Время - 09:07:49
            let state = event.state_id;
            let location = event.location_id;

            state = getNameById(state, stateNameList, stateIdList);
            location = getNameById(location, locationNameList, locationIdList);

            data +=
                '<div class="state_div">'+
                '    <div class="item_info_div">'+
                '        <span class="big_orange">'+ location +'</span><br>'+
                '        <span class="small_white">'+ state +'</span>'+
                '    </div>'+
                '    <div class="date_div">'+
                '        <span class="small_white">'+ stateDate +'</span><br>'+
                '        <span class="small_white">'+ stateTime +'</span>'+
                '    </div>'+
                '</div>';
        }
        document.getElementById(host).innerHTML = '' + data;
    }
}
