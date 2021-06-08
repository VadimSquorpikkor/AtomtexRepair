const NOTHING_FOUND = "nothing_found"
const NO_STATES_FOUND = "no_states_found"
const SERIAL = "serial_number_prefix"
const DAYS_UNDER_REPAIR = "days_under_repair"
const ACCEPTED_TO_REPAIR = "accepted_for_repair"

const LANG_RUSSIAN = "russian";
const LANG_ENGLISH = "english";
const LANG_CHINESE = "chinese";
const LANG_ITALIAN = "italian";
const LANG_GERMANY = "germany";
const LANG_FRANCE  = "france";


function getLanguage(pageLang) {
   switch (pageLang) {
      case "ru":return LANG_RUSSIAN;
      case "en":return LANG_ENGLISH;
      case "zh":return LANG_CHINESE;
      case "it":return LANG_ITALIAN;
      case "de":return LANG_GERMANY;
      case "fr":return LANG_FRANCE;
   }
}

let language = getLanguage(document.documentElement.lang);

let dictionary = new Map();
 dictionary.set('adj_r_diagnostica',    {en:'Diagnostics',         fr:'Diagnostique',            de:'Diagnose',                       it:'Diagnostica',                  ru: 'Диагностика'});
 dictionary.set('adj_r_ispytania',      {en:'Testing',             fr:'Essai',                   de:'Testen',                         it:'Test',                         ru: 'Испытания'});
 dictionary.set('adj_r_utochnenie',     {en:'Clarification',       fr:'Clarification',           de:'Klärung',                        it:'Una precisazione',             ru: 'Уточнение'});
 dictionary.set('adj_s_calibrovka',     {en:'Calibration',         fr:'Étalonnage',              de:'Kalibrierung',                   it:'Calibrazione',                 ru: 'Калибровка'});
 dictionary.set('adj_s_nastroika',      {en:'Tuning',              fr:'Réglage',                 de:'Abstimmung',                     it:'Messa a punto',                ru: 'Настройка'});
 dictionary.set('adj_s_otgruzka',       {en:'Shipment',            fr:'Expédition',              de:'Sendung',                        it:'Spedizione',                   ru: 'Отгрузка'});
 dictionary.set('adjustment',           {en:'Adjustment',          fr:'Ajustement',              de:'Einstellung',                    it:'Regolazione',                  ru: 'Участок РИР'});
 dictionary.set('ass_a_razborka',       {en:'Disassembly',         fr:'Démontage',               de:'Demontage',                      it:'Smontaggio',                   ru: 'Разборка'});
 dictionary.set('ass_a_sborka',         {en:'Assembly',            fr:'Assemblée',               de:'Versammlung',                    it:'Assemblaggio',                 ru: 'Сборка'});
 dictionary.set('ass_a_zamena',         {en:'Replacement',         fr:'Remplacement',            de:'Ersatz',                         it:'Sostituzione',                 ru: 'Замена'});
 dictionary.set('assembly',             {en:'Assembly area',       fr:'Zone d\'assemblage',      de:'Montagebereich',                 it:'Assemblaggio',                 ru: 'Сборочный участок'});
 dictionary.set('AT2503',               {en:'AT2503',              fr:'AT2503',                  de:'AT2503',                         it:'AT2503',                       ru: 'AT2503'});
 dictionary.set('AT6130',               {en:'AT6130',              fr:'AT6130',                  de:'AT6130',                         it:'AT6130',                       ru: 'МКС-AT6130'});
 dictionary.set('AT6130C',              {en:'AT6130C',             fr:'AT6130C',                 de:'AT6130C',                        it:'AT6130C',                      ru: 'МКС-AT6130С'});
 dictionary.set('BDKG01',               {en:'BDKG01',              fr:'BDKG01',                  de:'BDKG01',                         it:'BDKG01',                       ru: 'БДКГ-01'});
 dictionary.set('BDKG04',               {en:'BDKG04',              fr:'BDKG04',                  de:'BDKG04',                         it:'BDKG04',                       ru: 'БДКГ-04'});
 dictionary.set('gra_a_graduirovka',    {en:'Graduation',          fr:'Graduation',              de:'Skala',                          it:'Graduazione',                  ru: 'Градуировка'});
 dictionary.set('gra_a_psi',            {en:'Testing',             fr:'Testing',                 de:'Testen',                         it:'Test',                         ru: 'ПСИ'});
 dictionary.set('graduation',           {en:'Graduation',          fr:'Graduation',              de:'Rahmen',                         it:'Configurazione',               ru: 'Градуировка'});
 dictionary.set('rep_r_prinyat',        {en:'Accepted for repair', fr:'Accepté pour réparation', de:'Zur Reparatur angenommen',       it:'Accettato per la riparazione', ru: 'Принят в ремонт'});
 dictionary.set('rep_r_raschet',        {en:'Calculation',         fr:'Calcul',                  de:'Berechnung',                     it:'Calcolo',                      ru: 'Расчет'});
 dictionary.set('rep_r_soglasovanie',   {en:'Agreement',           fr:'Accord',                  de:'Zustimmung',                     it:'Accordo',                      ru: 'Согласование'});
 dictionary.set('repair_area',          {en:'Repair Service',      fr:'Service de réparation',   de:'Reparaturdienst',                it:'Riparazione',                  ru: 'Группа сервиса'});
 dictionary.set('serial_number_prefix', {en:'S/N',                 fr:'N',                       de:'ON',                             it:'N',                            ru: '№'});
 dictionary.set('sol_a_montag',         {en:'Soldering',           fr:'Soudure',                 de:'Löten',                          it:'Saldatura',                    ru: 'Монтаж'});
 dictionary.set('soldering',            {en:'Soldering',           fr:'Soudure',                 de:'Löten',                          it:'Saldatura',                    ru: 'Монтаж'});
 dictionary.set('rep_r_vydano',         {en:'Issued',              fr:'Publié',                  de:'Problematisch',                  it:'Rilasciato',                   ru: 'Выдано'});
 dictionary.set('rep_r_otpravleno',     {en:'Shipped',             fr:'Expédié',                 de:'Versand',                        it:'Spedito',                      ru: 'Отправлено'});
 dictionary.set('rep_r_ozidanie',       {en:'Waiting for payment', fr:'En attente de paiement',  de:'Warten auf Zahlung',             it:'In attesa del pagamento',      ru: 'Ожидание оплаты'});

 dictionary.set('find_number',          {en:'Search',              fr:'Rechercher',              de:'Suche',                          it:'Ricerca',                      ru: 'Найти'});
 dictionary.set('nothing_found',        {en:'Nothing found',       fr:'Rien n\'a été trouvé',    de:'Nichts gefunden',                it:'Non abbiamo trovato nulla',    ru: 'Ничего не найдено'});
 dictionary.set('no_states_found',      {en:'No events found',     fr:'Aucun événement trouvé',  de:'Keine Veranstaltungen gefunden', it:'Nessun evento trovato',        ru: 'Событий не найдено'});
 dictionary.set('days_under_repair',    {en:'Days under repair',   fr:'Jours de réparation',     de:'Tage in Reparatur',              it:'Giorni in riparazione',        ru: 'Дней в ремонте'});
 dictionary.set('accepted_for_repair',  {en:'Accepted for repair', fr:'Accepté pour réparation', de:'Zur Reparatur angenommen',       it:'Accettato per la riparazione', ru: 'Принят в ремонт'});

 dictionary.set('serial_number',        {en:'Serial number',       fr:'Numéro de série',         de:'Ordnungsnummer',                 it:'Numero di serie',              ru: 'Серийный номер'});
 dictionary.set('serial_number_text',   {en:'Serial number:',      fr:'Numéro de série:',        de:'Ordnungsnummer:',                it:'Numero di serie:',             ru: 'Серийный номер:'});

function getRightLanguageWord(id) {
    if (!dictionary.has(id)) return id;
    switch (language) {
        case LANG_RUSSIAN: return dictionary.get(id).ru;
        case LANG_ENGLISH: return dictionary.get(id).en;
        case LANG_FRANCE:  return dictionary.get(id).fr;
        case LANG_GERMANY: return dictionary.get(id).de;
        case LANG_ITALIAN: return dictionary.get(id).it;
        default: return dictionary.get(id).en;
    }
}

