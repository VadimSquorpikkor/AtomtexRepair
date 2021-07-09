const NOTHING_FOUND = "nothing_found"
const NO_STATES_FOUND = "no_states_found"
const SERIAL = "serial_number_prefix"
const DAYS_UNDER_REPAIR = "days_under_repair"
const ACCEPTED_TO_REPAIR = "accepted_for_repair"
const REPAIRS_COMPLETED = "repairs_completed"

const LANG_RUSSIAN = "ru";
const LANG_ENGLISH = "en";
const LANG_CHINESE = "zh";
const LANG_ITALIAN = "it";
const LANG_GERMANY = "de";
const LANG_FRENCH  = "fr";
const LANG_SPANISH = "es";

const KEY_LANGUAGE = "lang";

function saveLanguage(lang) {
    localStorage.setItem(KEY_LANGUAGE,lang);
}

function getSavedLanguage() {
    let lang = localStorage.getItem(KEY_LANGUAGE);
    console.log('language is '+lang);
    if (lang==null) return LANG_ENGLISH;
    switch (lang) {
        case "ru":return LANG_RUSSIAN;
        case "en":return LANG_ENGLISH;
        case "zh":return LANG_CHINESE;
        case "it":return LANG_ITALIAN;
        case "de":return LANG_GERMANY;
        case "fr":return LANG_FRENCH;
        case "es":return LANG_SPANISH;
        default: return LANG_ENGLISH;
    }
}

let language = getSavedLanguage();

let dictionary = new Map();
 dictionary.set('adj_r_diagnostica',    {en:'Diagnostics',         fr:'Diagnostique',            de:'Diagnose',                       it:'Diagnostica',                  ru: 'Диагностика',         es:'Diagnósticos'});
 dictionary.set('adj_r_ispytania',      {en:'Testing',             fr:'Essai',                   de:'Testen',                         it:'Test',                         ru: 'Испытания',           es:'Pruebas'});
 dictionary.set('adj_r_utochnenie',     {en:'Clarification',       fr:'Clarification',           de:'Klärung',                        it:'Una precisazione',             ru: 'Уточнение',           es:'Aclaración'});
 dictionary.set('adj_s_calibrovka',     {en:'Calibration',         fr:'Étalonnage',              de:'Kalibrierung',                   it:'Calibrazione',                 ru: 'Калибровка',          es:'Calibración'});
 dictionary.set('adj_s_nastroika',      {en:'Tuning',              fr:'Réglage',                 de:'Abstimmung',                     it:'Messa a punto',                ru: 'Настройка',           es:'Afinación'});
 dictionary.set('adj_s_otgruzka',       {en:'Shipment',            fr:'Expédition',              de:'Sendung',                        it:'Spedizione',                   ru: 'Отгрузка',            es:'Envío'});
 dictionary.set('adjustment',           {en:'Adjustment',          fr:'Ajustement',              de:'Einstellung',                    it:'Regolazione',                  ru: 'Участок РИР',         es:'Ajustamiento'});
 dictionary.set('ass_a_razborka',       {en:'Disassembly',         fr:'Démontage',               de:'Demontage',                      it:'Smontaggio',                   ru: 'Разборка',            es:'Desmontaje'});
 dictionary.set('ass_a_sborka',         {en:'Assembly',            fr:'Assemblée',               de:'Versammlung',                    it:'Assemblaggio',                 ru: 'Сборка',              es:'Montaje'});
 dictionary.set('ass_a_zamena',         {en:'Replacement',         fr:'Remplacement',            de:'Ersatz',                         it:'Sostituzione',                 ru: 'Замена',              es:'Reemplazo'});
 dictionary.set('assembly',             {en:'Assembly area',       fr:'Zone d\'assemblage',      de:'Montagebereich',                 it:'Assemblaggio',                 ru: 'Сборочный участок',   es:'Area de ensamblado'});
 dictionary.set('AT2503',               {en:'AT2503',              fr:'AT2503',                  de:'AT2503',                         it:'AT2503',                       ru: 'AT2503',              es:''});
 dictionary.set('AT6130',               {en:'AT6130',              fr:'AT6130',                  de:'AT6130',                         it:'AT6130',                       ru: 'МКС-AT6130',          es:'AT2503'});
 dictionary.set('AT6130C',              {en:'AT6130C',             fr:'AT6130C',                 de:'AT6130C',                        it:'AT6130C',                      ru: 'МКС-AT6130С',         es:'AT6130C'});
 dictionary.set('BDKG01',               {en:'BDKG-01',             fr:'BDKG-01',                 de:'BDKG-01',                        it:'BDKG-01',                      ru: 'БДКГ-01',             es:'BDKG-01'});
 dictionary.set('BDKG04',               {en:'BDKG-04',             fr:'BDKG-04',                 de:'BDKG-04',                        it:'BDKG-04',                      ru: 'БДКГ-04',             es:'BDKG-04'});
 dictionary.set('gra_a_graduirovka',    {en:'Graduation',          fr:'Graduation',              de:'Skala',                          it:'Graduazione',                  ru: 'Градуировка',         es:'Graduación'});
 dictionary.set('gra_a_psi',            {en:'Testing',             fr:'Testing',                 de:'Testen',                         it:'Test',                         ru: 'ПСИ',                 es:'Pruebas'});
 dictionary.set('graduation',           {en:'Graduation',          fr:'Graduation',              de:'Rahmen',                         it:'Configurazione',               ru: 'Градуировка',         es:'Graduación'});
 dictionary.set('rep_r_prinyat',        {en:'Accepted for repair', fr:'Accepté pour réparation', de:'Zur Reparatur angenommen',       it:'Accettato per la riparazione', ru: 'Принят в ремонт',     es:'Aceptado para reparación'});
 dictionary.set('rep_r_raschet',        {en:'Calculation',         fr:'Calcul',                  de:'Berechnung',                     it:'Calcolo',                      ru: 'Расчет',              es:'Cálculo'});
 dictionary.set('rep_r_soglasovanie',   {en:'Agreement',           fr:'Accord',                  de:'Zustimmung',                     it:'Accordo',                      ru: 'Согласование',        es:'Convenio'});
 dictionary.set('repair_area',          {en:'Repair Service',      fr:'Service de réparation',   de:'Reparaturdienst',                it:'Riparazione',                  ru: 'Группа сервиса',      es:'Servicio de reparación'});
 dictionary.set('serial_number_prefix', {en:'S/N',                 fr:'N',                       de:'ON',                             it:'N',                            ru: '№',                  es:'N'});
 dictionary.set('sol_a_montag',         {en:'Soldering',           fr:'Soudure',                 de:'Löten',                          it:'Saldatura',                    ru: 'Монтаж',              es:'Soldadura'});
 dictionary.set('soldering',            {en:'Soldering',           fr:'Soudure',                 de:'Löten',                          it:'Saldatura',                    ru: 'Монтаж',              es:'Soldadura'});
 dictionary.set('rep_r_vydano',         {en:'Issued',              fr:'Délivré',                  de:'Ausgestellt',                  it:'Rilasciato',                   ru: 'Выдано',              es:'Emitido'});
 dictionary.set('rep_r_otpravleno',     {en:'Shipped',             fr:'Expédié',                 de:'Versand',                        it:'Spedito',                      ru: 'Отправлено',          es:'Enviado'});
 dictionary.set('rep_r_ozidanie',       {en:'Waiting for payment', fr:'En attente de paiement',  de:'Warten auf Zahlung',             it:'In attesa del pagamento',      ru: 'Ожидание оплаты',     es:'A la espera del pago'});

 dictionary.set('find_number',          {en:'Search',              fr:'Rechercher',              de:'Suche',                          it:'Ricerca',                      ru: 'Найти',               es:'Buscar'});
 dictionary.set('nothing_found',        {en:'Nothing found',       fr:'Rien n\'a été trouvé',    de:'Nichts gefunden',                it:'Non abbiamo trovato nulla',    ru: 'Ничего не найдено',   es:'Nada Encontrado'});
 dictionary.set('no_states_found',      {en:'No events found',     fr:'Aucun événement trouvé',  de:'Keine Veranstaltungen gefunden', it:'Nessun evento trovato',        ru: 'Событий не найдено',  es:'No se encontraron eventos'});
 dictionary.set('days_under_repair',    {en:'Days under repair',   fr:'Jours de réparation',     de:'Tage in Reparatur',              it:'Giorni in riparazione',        ru: 'Дней в ремонте',      es:'Días en reparación'});
 dictionary.set('version_text',         {en:'Version — ',         fr:'Version — ',             de:'Ausführung — ',                  it:'Versione — ',                 ru: 'Версия — ',          es:'Versión — '});
 dictionary.set('accepted_for_repair',  {en:'Accepted for repair', fr:'Accepté pour réparation', de:'Zur Reparatur angenommen',       it:'Accettato per la riparazione', ru: 'Принят в ремонт',     es:'Aceptado para reparación'});
 dictionary.set('Repair Service',       {en:'Repair Service',      fr:'Service de réparation',   de:'Reparaturdienst',                it:'Servizio di riparazione',      ru: 'Группа Сервиса',      es:'Servicio de reparación'});
 dictionary.set('repairs_completed',    {en:'REPAIRS COMPLETED',   fr:'RÉPARATIONS TERMINÉES',   de:'REPARATUREN ABGESCHLOSSEN',      it:'RIPARAZIONI COMPLETATE',       ru: 'РЕМОНТ ЗАВЕРШЕН',     es:'REPARACIONES TERMINADAS'});

 dictionary.set('serial_number',        {en:'Serial number',       fr:'Numéro de série',         de:'Ordnungsnummer',                 it:'Numero di serie',              ru: 'Серийный номер',      es:'Número de serie'});
 dictionary.set('serial_number_text',   {en:'Serial number:',      fr:'Numéro de série:',        de:'Ordnungsnummer:',                it:'Numero di serie:',             ru: 'Серийный номер:',     es:'Número de serie:'});

 //имена устройств. Только 1 язык, так как всё равно для не русских языков название будет одинаковым. Для не русских будет возвращать id
 dictionary.set('AT2503',       {ru: 'ДКГ-AT2503'});
 dictionary.set('AT6130',       {ru: 'МКС-AT6130'});
 dictionary.set('AT6130C',      {ru: 'МКС-AT6130C'});
 dictionary.set('BDKG-01',      {ru: 'БДКГ-01'});
 dictionary.set('BDKG-04',      {ru: 'БДКГ-04'});


function getRightLanguageWord(id) {
    if (!dictionary.has(id)) return id;
    switch (language) {
        case LANG_RUSSIAN: return dictionary.get(id).ru;
        case LANG_ENGLISH: return dictionary.get(id).en;
        case LANG_FRENCH:  return dictionary.get(id).fr;
        case LANG_GERMANY: return dictionary.get(id).de;
        case LANG_ITALIAN: return dictionary.get(id).it;
        case LANG_SPANISH: return dictionary.get(id).es;
        default: return dictionary.get(id).en;
    }
}

