
const VERSION_NUMBER = 1.05;

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

const flag_en = document.getElementById('flag_en');
const flag_de = document.getElementById('flag_de');
const flag_fr = document.getElementById('flag_fr');
const flag_ru = document.getElementById('flag_ru');
const flag_it = document.getElementById('flag_it');
const flag_es = document.getElementById('flag_es');

const serial_doted_text = document.getElementById('serial_number_text');
const version_text = document.getElementById('version_text');
const serial_input = document.getElementById('serial');
const find_num_button = document.getElementById('search_button');
const main_h1 = document.getElementById('main_h1');

serial_doted_text.innerText = getRightLanguageWord('serial_number_text');
version_text.innerText = getRightLanguageWord('version_text')+VERSION_NUMBER;
main_h1.innerText = getRightLanguageWord('Repair Service');
serial_input.placeholder = getRightLanguageWord('serial_number');
find_num_button.value = getRightLanguageWord('find_number');


flag_en.addEventListener('click', function (){
    saveLanguage(LANG_ENGLISH);
    location.reload();
});
flag_de.addEventListener('click', function (){
    saveLanguage(LANG_GERMANY);
    location.reload();
});
flag_fr.addEventListener('click', function (){
    saveLanguage(LANG_FRENCH);
    location.reload();
});
flag_ru.addEventListener('click', function (){
    saveLanguage(LANG_RUSSIAN);
    location.reload();
});
flag_it.addEventListener('click', function (){
    saveLanguage(LANG_ITALIAN);
    location.reload();
    // return false;
});
flag_es.addEventListener('click', function (){
    saveLanguage(LANG_SPANISH);
    location.reload();
});

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

            deviceName = getRightLanguageWord(deviceName);//getNameById(deviceName, deviceNameList, deviceIdList);
            state = getRightLanguageWord(state);//getNameById(state, stateNameList, stateIdList);
            location = getRightLanguageWord(location);//getNameById(location, locationNameList, locationIdList);

            data +=
            '<div class="found_unit_item" onclick=getAllEventsByUnitIdSmall("'+unit.id+'")>'+
            '    <div class="item_info_div">'+
            '        <span class="big_orange">'+ deviceName +'</span><br>'+
            '        <span class="small_white">'+ getRightLanguageWord(SERIAL) + ' — ' + serial +'</span><br>'+
            // '        <span class="small_white">(вн. '+ innerSerial +')</span><br>'+
            '        <span class="big_orange">'+ location +'</span><br>'+
            '        <span class="small_white">'+ state +'</span>'+
            '    </div>'+
            '    <div class="day_count_div">'+
            '        <span class="small_white">'+ getRightLanguageWord(ACCEPTED_TO_REPAIR) +':</span><br>'+
            '        <span class="small_white">'+ date +'</span><br>'+
            // '        <span class="small_white">'+ dayString +'</span>'+
            '        <span class="small_white">'+ getRightLanguageWord(DAYS_UNDER_REPAIR) +':</span><br>'+
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
    document.getElementById(id).innerHTML = '<span class="white_span">'+getRightLanguageWord(NOTHING_FOUND)+'</span>'
}

function addCollectionOfDocumentToDiv_new(arr, host) {
    let data;
    if (arr.length === 0) {
        document.getElementById(host).innerHTML =
            '<span class="white_span">'+getRightLanguageWord(NO_STATES_FOUND)+'</span>';
    } else {
        let event;
        data = '';
        for (let i = 0; i < arr.length; i++) {
            event = arr[i];

            let stateDate = event.date.toDate().toLocaleDateString('ru-RU'); //Дата - 18.03.2021
            let stateTime = event.date.toDate().toLocaleTimeString('ru-RU'); //Время - 09:07:49
            let state = event.state_id;
            let location = event.location_id;

            state = getRightLanguageWord(state);//getNameById(state, stateNameList, stateIdList);
            location = getRightLanguageWord(location);//getNameById(location, locationNameList, locationIdList);

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
