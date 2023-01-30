var slika, naslov, retci, stupci, opis;

function broj() {
    $("#broj-puzzla").html($("#retci").val() * $("#stupci").val())
}

$(document).ready(function() {
    $(".modal").fadeIn("slow");
    $(".footer").fadeIn("slow");
    $("#broj-puzzla").html(retci * stupci)
    broj();
    $('select').css({
        'font-size': '18px',
        'font-family': "sans-serif"
    });
    promijeni_jezik()
});


// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it

function promijeni_jezik() {
    if (localStorage.getItem("jezik") == null) {
        localStorage.setItem('jezik', 'hr')
    }
    if (localStorage.getItem("jezik") == "hr") {

        $(".hrvatski").css({
            "opacity": "1"
        })
        $(".engleski").css({
            "opacity": "0.5"
        })

        $(".hr").show()
        $(".eng").hide()

    } else {
        localStorage.setItem('jezik', 'eng')
        $(".engleski").css({
            "opacity": "1"
        })
        $(".hrvatski").css({
            "opacity": "0.5"
        })
        $(".eng").show()
        $(".hr").hide()
    }
}


function stvori() {

    if (slika == '1.jpg') {
        opishr = "<p><strong>Herman Dalmatin</strong> (<em>Hermannus Dalmata, Hermannus Sclavus, Hermannus Secundus, Hermannus de Carinthia</em> - in Latin ) was born round 1100 in central Istria. He is the oldest Croatian scholar of the world-wide fame and one among the greatest brains, a philosopher and a translator of the scientific writings from the Arabic in the Latin language. It is through those translations that the Arabic science and the lost work of the greatest ancient scholars like Aristotle, Ptolemaeus, Eukleides and others were introduced to Europe.</p><p>Herman is believed to have finished his initial education in SS. Peter and Paul`s in the Woods Benedictine monastery, or in some other  Benedictine monastery located on the west coast of Istria where he lived and received education until he was 20 years of age.</p>"
        opiseng = ""
        nazivhr = "Herman`s Homeland – St. Peter`s in the Woods, Istria, Croatia"
        naziveng = ""
    } else if (slika == '2.jpg') {
        opishr = "<p>Having completed his education in Istria, at the age of twenty, young Herman studies in Chartres and Paris and finishes his studies in 1135; in the period between the first and the second Crusades he sets out on an educational travel being attracted to the Arabic science and philosophy. He travels along the Adriatic coast, Durres and Constantinople following the routes of the Crusaders. From 1135 to 1138 he travels  to Palestine and moves further on  across the Muslim World living in the cultural centres (Damascus, Baghdad, Aleppo, Edessa and others) learning Arabic and studying science and philosophy. On his return to Europe along the Mediterranean coast Herman is very active in translating and also engaged in science . He sojourns in many towns across Spain and France.</p><p>It is in the translation centre along the Ebro river that Herman comes across Peter Venerabilis, a monk in the Cluny monastery, the first one to initiate the studies of Islam in Western Europe. Herman joins the inner circle of the monk`s associates and in his company travels all over Spain.</p><p>In the rich Moorish libraries he searches for the best translation patterns. Then he leaves for Leon, the centre of the kingdom of Castille; in the northwest pursuing the scientific work and translating ; he is the founder of his own translating school there.</p><p>His next destination is Toulouse in the south of France followed by Beziers where he has finished his most significant work.</p><p>After 1143 there is no more data about Herman`s life or work.</p>"
        opiseng = ""
        nazivhr = "Map of Herman`s Itinerary"
        naziveng = ""
    } else if (slika == '3.jpg') {
        opishr = "<p>After two decades of Herman`s life in Istria and the  Benedictine Abbey</p><p>he continues his education up until 1134 in Chartres, France, in one of the best Cathedral schools in Europe of that time. The school enjoyed an exceptional reputation as its teachers were many prominent philosophers, theologists and scientists .The school in Chartres had an important role in the development of the European science during the 11<sup>th</sup> and 12<sup>th</sup> centuries due to its openness to the different traditions (ancient Greek and Arabic) as well as the high standards of teaching. This is the period of big changes in the scientific and philosophical thinking concepts in the path leading to the Renaissance era . Herman lived in time when only cathedral schools were available ; they were the predecessors to the institutions of high learning and the first universities in Europe.</p><p>There are no records showing Herman belonging to either the Benedictines or any other order. During his time only few laymen were engaged in philosophy or science. Herman`s decision to leave his homeland after completing school in  the Benedictine Cathedral School is the indication that he acquired  a solid knowledge in trivium - grammar, rhetoric and logic as well as quadrium - arithmetic, geometry, astronomy and music) allowing  him to further improve and develop his intellectual interests.</p>"
        opiseng = ""
        nazivhr = "Herman`s education in the famous Chartres Cathedral School"
        naziveng = ""
    } else if (slika == '4.jpg') {
        opishr = "<p>The “<em>Introductorium in astronomiam</em> “ by Abu Ma`shar was the most important work in the Arabic language which circulated and preserved Aristotle`s “<em>Natural Philosophy</em>” unknown and lost at the end of the classical period and during the Middle Ages in Europe.</p><p>Herman`s translation was significant for the discovery and dissemination of Aristotle`s philosophy at that time forgotten and unknown in Europe but very significant for the further development in science.</p><p>Herman`s translation was rewritten in the 12<sup>th</sup>, 13<sup>th</sup> and 14<sup>th</sup> centuries ; after the invention of the printing machine it was printed twice: in Augsburg in 1489 and 1495, and in Venice in 1506.The total of eleven Harman`s translations have been preserved and make part of the various collections in the libraries of Oxford, Paris, Vatican, Florence, Manchester, Munich, Naples and other places.</p><p>In the period from 1138 to 1142 Herman was engaged both in translating and the scientific work while working in the translating centres along the Ebro river in Spain. After his return from the educational travel across the Arabic countries he completed a dozen translations and compilations and also produced an original work of his authorship. Herman opened a treasure trove in the Arabic knowledge, a creation from two sources : ancient Greek and Eastern concepts. The material translated by Herman and his contemporaries in the 12<sup>th</sup> century was reaching the schools of Western Europe influencing the development and teaching trends and challenging intellectual activity at universities of the western Europe until the end of the Middle Ages ; it resulted in something new, the new quality leading to huge conceptual changes in science and philosophy during the Renaissance which would witness the birth of the modern science and philosophy. However, the process of knowledge communication, transformation, the acceptance of knowledge and philosophical aspects is more complex than it seems at a glance. Apart from the influences of the Arabic and ancient Greek philosophies and science,very obvious are the influences from the different eastern wisdom like Persian, Chinese and Indian; that was reflected in the work Herman had written or translated and as such passed over to the Latin western Christianity.</p>"
        opiseng = ""
        nazivhr = "Allegorical images of the Sun taken from the “Introductorium in astronomiam” (Introduction to Astronomy) by Abu Ma`shar, the Arabic scientist and astronomer, translated in its entirety from the Arabic in Latin by Herman in 1140."
        naziveng = ""
    } else if (slika == '5.jpg') {
        opishr = "<p>Tijekom petogodi&scaron;njeg razdoblja od 1138. do 1142. godine, koje je nakon povratka s Bliskog istoka proveo na Iberskom poluotoku (&Scaron;panjolska), u području uz rijeku Ebro, Herman se zajedničkim izučavanjima i intenzivnim prevoditeljskim radom intenzivno povezao s Robertom iz Kettona. O suradnji i predanom radu svjedoči odlomak iz Hermanova djela <em>De essentiis</em> u kojem se sa zahvalno&scaron;ću obraća Robertu i podsjeća ga na duga i naporna zajednička izučavanja, koja su im otvarala riznice arapskog znanja nastalog na temeljima dvaju izvora: starogrčkih i istočnjačkih shvaćanja.</p><p>Ono &scaron;to su Herman i njegovi suvremenici u 12. stoljeću prevodili, prenosilo se i &scaron;irilo u &scaron;kolama zapadne Europe, te je utjecalo na razvoj i usmjerenje nastave i intelektualne djelatnosti na sveučili&scaron;tima zapadne Europe sve do konca srednjeg vijeka. Također, to je bio početak stvaranja nečeg kvalitativno novog, kao i dio priprema koje su vodile velikim konceptualnim promjenama u znanosti i filozofiji tijekom renesanse, kada se zasnivaju i oblikuju temelji novovjekovne znanosti i filozofije. Međutim, proces prijenosa, transformacije i prihvaćanja znanja i filozofskih pogleda mnogo je složeniji nego se to na prvi pogled čini. U tom procesu, pored utjecaja arapske i starogrčkih filozofija i znanosti prisutni su vidljivi utjecaji i različitih istočnjačkih znanja kao perzijskih, indijskih i kineskih, &scaron;to se odražava i u djelima koja je Herman prevodio i pisao, te ih tako posredovao latinsko-kr&scaron;ćanskom Zapadu.</p>"
        opiseng = ""
        nazivhr = "Hermanov prevoditeljski i znanstveni rad u centrima uz rijeku Ebro, tijekom razdoblja od 1138. do 1142. godine, kada je vrativši se s Bliskog istoka u Europu, priredio desetak prijevoda i kompilacija."
        naziveng = ""
    } else if (slika == '6.jpg') {
        opishr = "<p>The Reconquista of Spain did not prevent the educated Christians, Moors (Arabs) and Jews alike from researching together the precious manuscripts from the Moorish libraries that would be translated and compiled into new,original pieces. Their efforts resulted in a cultural phenomenon well known as “<em>Escuela de traductores de Toledo</em>” (The Toledo School of Translators), a place where scholars gathered and engrossed in translating.</p><p>Herman himself kept contact with the school. He was known at school for his translation from 1138 of the sixth book called “<em>Fatidica</em>” (Fortuneteller) written by Sahl ibn Bishra. The work is a collection of discussions about planets and the divinations which result from the retrograde planet motions and interrelated positions as well as the predictions based on the observation of the comet movements.</p><p>The copies of Herman`s translation of “<em>Fatidica</em>” are kept in the Vatican, Cambridge, Oxford,Matz; it was first printed in 1529 in Prague.</p><p>Sheila Law-Beer, New York, 1979 included the segments from the translation of “Fatidica” in her doctoral thesis.</p>"
        opiseng = ""
        nazivhr = "Herman`s association with the famous School of Translators in Toledo"
        naziveng = ""
    } else if (slika == '7.jpg') {
        opishr = "<p>The work deals with the organization of the world and explains Herman`s own natural philosophy and cosmology .It is based on Aristotelianism Herman had found in the Abu Ma`shar`s work and also Platonism that he was introduced to while in Charters .</p><p>The work played an important role in the future development of science.</p><p>Four transcripts have been preserved and are kept in Naples, London, Oxford and Epsom. ”On Essences” was published three times: in 1946 in Latin (Santander ), in Latin-English (Leiden Koln, in 1982) and in Latin-Croatian (Pula, in 1990).</p>"
        opiseng = ""
        nazivhr = "Herman moves to Beziers (in France ) in 1143 to complete his most significant work <em>De Essentiis</em> (On Essences)"
        naziveng = ""
    } else if (slika == '8.jpg') {
        opishr = "<p>Astrolab (Latin - <em>Astrolabium)</em> is an ancient astronomical instrument developed by the Arabic scientists; its introduction was significant in the development of both theoretical and practical astronomy in the Western Europe. It was used to define the position of the planets and stars. Before the invention of the sextant in the 18<sup>th</sup> century it was an important navigational instrument.</p><p>The instrument was also used in astrology .</p><p>Herman`s translation of Ptolomaeus`s “<em>Planisfer</em>a” (preserved in the Arabic translation) which was lost and unknown in Europe assisted in the application of astrolabe in Europe .It contains stereographic projections of celestial sphere on a plane and was used as a theoretical background for the construction of the astrolab in the Latin West during the Middle Ages. Eight transcripts of Herman`s manuscript have been preserved and are stored in the Vatican, Paris, Lyon, Dresden and Oxford.</p><p>Herman`s translation of the “<em>Planisphere” </em>was printed several times : in Venice in 1507/8, Nurnberg in 1531, Basel in 1536, in Venice in 1558. A critical edition: Heiberg, “<em>Ptolemaie Opera Astronomica Minora</em> “ was compiled in 1907 in Lepzig.</p>"
        opiseng = ""
        nazivhr = "Astrolab (Star-taker)"
        naziveng = ""
    } else if (slika == '9.jpg') {
        opishr = "<p>Mathematics made a part of Herman`s scientific work. He noticed that mathematics is related to the natural laws. Based on Euclid`s <em>“Elements</em>”.</p><p>Herman is trying to prove the established astronomical assumptions by applying mathematics . Contrary to the mathematical tradition of the time he adopted a new approach – mathematical evidence. The evidence is essential and that is the new approach that is discussed in his masterpiece “De essentiis” (On Essencies). The logical structure of mathematics did not play a significant role in the medieval tradition and mathematics was considered only in the interaction with philosophy. In this respect Herman`s work marked the beginning of the application of the Euclid`s methodology which would open doors for the modern science into the Renaissance.</p>"
        opiseng = ""
        nazivhr = "Herman`s drawing added to the excerpts of the eclipse of the Sun and the Moon from the “De essentiis” (On Essencies), Besiers,1143; Transcript from the 14<sup>th</sup> century, London, British Musem"
        naziveng = ""
    } else if (slika == '10.jpg') {
        opishr = "<p>Cordoba was the centre of the Moorish Spain and it developed in to a thriving capital of the Caliphate of Cordoba. (756 – 1035) . Together with Baghdad it was one of the most important and the wealthiest centre of the Islamic culture and art of that time. About year 1000 Cordoba was one of the largest town in the world with the population of half a million inhabitants, showing the power and the expansion of the Islamic civilization in Southern Europe. The Muslims made the majority of population but Christians and Jews lived there and also sojourned in Seville and Toledo. At the time when Europe and all Christian world fear the militant Islam a group of some educated Europeans of humanistic orientation emerged in the middle of the 12<sup>th</sup> century which was characterised by waging wars between the Christians and the Islamic forces. Encouraged by the fact that there were some Muslim and Christian communities coexisting peacefully in some parts of the Mediterranean the group are trying to start an open and amicable dialogue .In order to better understand Islam the agenda of the group would be based on reason, tolerance and love.</p><p>The promoter of the first studies in Islam in Europe was Peter Venerabilis,the ninth abbot of the reformed Benedictines with their central abbey in Cluny.</p><p>In 1142 Peter included Herman Dalmatin in his close circle of associates and translators highly appreciating Herman`s comprehensive education,extensive knowledge and translating skills.</p><p>Peter Venerabilis travelled the Iberian Peninsula to bring together the group of skilled associates including himself to do the research in the Moorish libraries across Spain in order to find best suited material .He wanted to collect the translated works from the Arabic language about Islam ; the texts would be included in the corpus about the Islam in Latin . In this way, the Islamic teaching would be introduced directly from the religious Islamic transcripts to the Western Europe at that time ignorant of the Muslim religion .</p><p>It was in 1142 that along the Ebro river Petrus Venerabilis meets Herman Dalmatin and his colleague and companion Robert from Ketton. They are assigned the task of translating the central religious text of Islam – the Quran (Qur`an) ; they are also given some additional Islamic texts. The goal was to produce the first ever Islamic corpus in Latin.</p><p>Herman`s translation of Qu`ran was a collaborative work but he alone also translated two additional Islamic religious pieces: “ <em>De generatione Mahumet </em>“</p><p> (The Birth of Muhammad) and “<em>Doctrina Muhamet“</em> (The Doctrine of Muhammad) .Herman was also assisting in the compilation of the</p><p>“ <em>Chronica Saracenorum</em> “ (The Chronicle of the Saracens ). It was also a very important piece in the presentation of Islam to the Christian Europe.</p><p>The manuscripts of Herman`s translations of the Islamic scripts are kept in the libraries in Paris, Oxford, Vatican and Cambridge; they were printed in Basel in 1550, after the invention of the printing machine.</p>"
        opiseng = ""
        nazivhr = "Herman`s contribution to an early introduction of Islam to Europe"
        naziveng = ""
    } else if (slika == '11.jpg') {
        opishr = "<p>Herman Dalmatin was the first to edit the first translation of Euclid`s <em>“Elements</em>”, a masterpiece of ancient mathematics which was lost in its integral form and unknown in Europe during the Middle Ages.</p><p>It is one of the most influential mathematical work of all time and it has had a countless number of editions .It explains the first strict axiomatic mathematical deductive system.</p><p>It entails the elementary mathematics : arithmetic (theory of numbers), synthetic geometry (point, line, surface and solid) and algebra.</p><p>The picture illustrates a page from the first printed edition from 1482 translated from the Arabic into the Latin language.</p>"
        opiseng = ""
        nazivhr = "First translation of Euclid`s<em>“Elements”</em>"
        naziveng = ""
    } else if (slika == '12.jpg') {
        opishr = "<p>Herman belonged to the Croatian ethnic group which was prevalent in Istria in the 12<sup>th</sup> century. In the Middle Ages there were no surnames in today`s sense of the word. There were other Hermans who also were engaged in science and philosophy . (Herman Contractus in the 11<sup>th</sup> century, Herman Alemannus from the 13<sup>th</sup> century ). Adjectives were used to define the ethnic group, native country or some personal traits; Herman, the Croatian scientist, is referred to as Herman Sclavus.</p><p>Herman `s capital work “<em>De essentiis</em>”, (On Essences) was signed himself as <strong>Herman Secundus</strong> (as opposed to Herman Contractus from the 11<sup>th</sup> century).</p><p>Herman is referred to as <strong>Herman de Carinthia</strong> by some 20<sup>th</sup> century authors because a part of Istria historically used to belong to the Frankish duchy in Carinthia. In Herman`s time the notion of Carinthia and Dalmatia could not territorially be distinguished. Adjective <strong>Dalmata</strong> added to Herman`s name was first used by Petrus Venerabilis (Peter the Honourable), with reference to Herman`s origin,in the territorial sense, to the Roman Province Dalmatia (territorially very close to Herman`s native country). <strong>Dalmata</strong> was also associated with Herman`s name in the scripts of the famous Toledo Translators School that Herman was associated with.</p>"
        opiseng = ""
        nazivhr = "The map of Istria - Herman`s homeland"
        naziveng = ""
    } else if (slika == '13.jpg') {
        opishr = "<p>Herman Dalmatin is the oldest scientist of worldwide fame and one of the greatest scholars of Croatia, a philosopher and a translator of the scientific work from the Arabic into Latin language. His work and prolific opera and translations from Arabic into Latin were instrumental in the development of the Western European science and philosophy. His opera (fifteen compilations and translations) contributed significantly to the development of philosophy and exact science in the period preceding the opening of the first universities in Europe. He was drawn to the Arabic science and philosophy which reached their peak during that period ; driven by his intellectual curiosity and active spirit Herman and his English friend, Robert from Ketton (Chester ), set out on a long educational travel, a venture across the Islamic countries and the Arabic scientific and cultural centres that would all be reflected in his work.</p><p>Herman lived and worked at the crossroads of diverse civilizations, in the cultural centres of mixed traditions,thinking and influence. It was the time of the Crusades and he believed that a better insight into the Islam could result in the mutual understanding and peace.</p><p>That might explain why he joined Robert from Ketton to translate Qu`ran into Latin to be done for the first time ever ; the idea was suggested to him by Peter Venerabilis, a monk from the monastery in Cluny. Additionally, Herman translated two more influential Islamic writings “<em>De generatione Mahumet</em>”</p><p>(Muhammad `s Birth) and “ <em>Doctrina Mahumet “</em> (Muhammad`s Teaching) which contributed greatly in the early understanding of the Islam in Europe.</p>"
        opiseng = ""
        nazivhr = "Herman Dalmatin – Bust, work by Mladen Mikulin, the sculptor"
        naziveng = ""
    } else if (slika == '14.jpg') {
        opishr = "He translated two more astrologic compilations : “<em>Liber ibrium</em>“ (On Precipitations ) in 1140, and “<em>De indagatione coris</em> “ (On Heart Research), later in 1140. The compilations included pieces from the different sources (Arabic, Indian and ancient Greek)."
        opiseng = ""
        nazivhr = "Herman took a particular interest in the Arabic astronomy and astrology which made science at that time"
        naziveng = ""
    } else if (slika == '15.jpg') {
        opishr = "<p>During his schooling in Chartres and Paris Herman was influenced by Thierry in Chartres, a very famous scholar who contributed to Herman`s solid knowledge in philosophy, natural physics, astronomy, astrology and mathematics; that would eventually shape him as a philosopher and scientist challenging him to be involved in an independent scientific, philosophical and translating work .</p><p>The Cathedral School in Paris in Herman`s time was held in high regard and would grow in the course of time to become a university in 1200, one among the first in Europe. Influenced by Thierry during his schooling Herman developed a positive attitude towards the Arabic science and philosophy .The Arabic influence had already been strong at the Cathedral School.</p><p>There is no doubt that the spiritual atmosphere at school and the availability of the early sources of the Islamic and Arabic scientific traditions were the challenging factors for Herman to make a decision to leave Europe after finishing studies in Paris and start a long journey along the trails of the Arabic philosophy and science.</p>"
        opiseng = ""
        nazivhr = "Herman`s schooling in the cathedral school in Paris in 1135"
        naziveng = ""
    } else if (slika == '16.jpg') {
        opishr = "<p>Herman Dalmatin started his schooling in one of the Benedictine schools in his native country of Istria. The monasteries were the focal points of the education and intellectual work in Istria and Dalmatia during the 13<sup>th</sup> century; they played an important role in the process of literacy and (education) schooling.</p><p>All Benedictine schools in Europe, consequently in Istria too, had a unique curriculum called <strong><em>septem artes liberales</em></strong> (seven liberal skills) and included :</p><p><strong>Trivium</strong> where grammar, retorics and dialectics were taught</p><p> and</p><p><strong>Quadrivium </strong>where arithmetic,geometry, astronomy and music were taught.</p><p>Consistent with the curriculum standards Herman had to master Latin and acquire solid knowledge from the trivium and quadrivium in order to pursue schooling and attend any of the Cathedral schools in Chartres and Paris which at the time were the most prestigious schools in the Western Europe.</p>"
        opiseng = ""
        nazivhr = "SS Peter and Paul`s Benedictine monastery from the 12<sup>th</sup> century located in the place called St. Peter`s in Woods"
        naziveng = ""
    } else if (slika == '17.jpg') {
        opishr = "<p><em>Baška tablet</em> (<em>Bašćanska ploča</em>) is one of the first monuments containing an inscription in the Croatian recension of the Curch Old Slavonic language, dating from  1100 AD. The inscription is written in the Glagolitic script. It was discovered in 1851 near the village of Baška on the Croatian island of Krk. While studying in a Benedictine monastery in Istria, Herman Dalmatin probably learned to write in Glagolitic script, the original Croatian script used to write the Baška tablet.</p>"
        opiseng = ""
        nazivhr = "Baška tablet"
        naziveng = ""
    } else if (slika == '18.jpg') {
        opishr = "<p>The Astronomical Clock in Prague is a clock with a special mechanism and a dial that shows the relative positions of the Sun, the Moon, the zodiacal constellations and some of the main planets. Herman took a particular interest in the Arabic astronomy and astrology which made science at that time. He translated two more astrologic compilations: “<em>Liber ibrium</em>“ (On Precipitations) in 1140, and “<em>De indagatione coris</em>“ (On Heart Research), later in 1140. The compilations included pieces from the different sources (Arabic, Indian, and ancient Greek).</p>"
        opiseng = ""
        nazivhr = "The Astronomical Clock in Prague"
        naziveng = ""
    } else if (slika == '19.jpg') {
        opishr = "<p>Herman studies in Chartres and Paris and finishes his studies in 1135. In the period between the first and the second Crusades he sets out on an educational travel being attracted to the Arabic science and philosophy. He travels along the Adriatic coast, Durres and Constantinople following the routes of the Crusaders. From 1135 to 1138 he travels  to Palestine and moves further on  across the Muslim World living in the cultural centres ( Damascus, Baghdad, Aleppo, Edessa and others) learning Arabic and studying science and philosophy.</p>"
        opiseng = ""
        nazivhr = "Baghdad - Herman's Journey to the Muslim World"
        naziveng = ""
    } else if (slika == '20.jpg') {
        opishr = "<p>Herman took a particular interest in the Arabic astronomy and astrology which made science at that time. He translated two more astrologic compilations: “<em>Liber ibrium</em>“ (On Precipitations) in 1140, and “<em>De indagatione coris</em>“ (On Heart Research), later in 1140. The compilations included pieces from the different sources (Arabic, Indian, and ancient Greek).</p>"
        opiseng = ""
        nazivhr = "Arabic astronomy and astrology"
        naziveng = ""
    } else if (slika == '21.jpg') {
        opishr = "<p>After two decades of Herman`s life in Istria and the Benedictine Abbey</p><p>he continues his education up until 1134 in Chartres, France, in one of the best Cathedral schools in Europe of that time. The school enjoyed an exceptional reputation as its teachers were many prominent philosophers, theologists and scientists. The school in Chartres had an important role in the development of the European science during the 11<sup>th</sup> and 12<sup>th</sup> centuries due to its openness to the different traditions (ancient Greek and Arabic) as well as the high standards of teaching. This is the period of big changes in the scientific and philosophical thinking concepts in the path leading to the Renaissance era. Herman lived in time when only cathedral schools were available; they were the predecessors to the institutions of high learning and the first universities in Europe.</p><p>There are no records showing Herman belonging to either the Benedictines or any other order. During his time only few laymen were engaged in philosophy or science. Herman`s decision to leave his homeland after completing school in the Benedictine Cathedral School is the indication that he acquired  a solid knowledge in trivium -grammar, rhetoric and logic as well as quadrium - arithmetic, geometry, astronomy and music) allowing  him to further improve and develop his intellectual interests.</p>"
        opiseng = ""
        nazivhr = "Herman`s education in the famous  Chartres Cathedral School"
        naziveng = ""
    } else if (slika == '22.jpg') {
        opishr = "<p>During his schooling in Chartres and Paris Herman was influenced by Thierry in Chartres, a very famous scholar who contributed to Herman`s solid knowledge in philosophy, natural physics, astronomy, astrology and mathematics; that would eventually shape him as a philosopher and scientist challenging him to be involved in an independent scientific, philosophical and translating work.</p><p>The Cathedral School in Paris in Herman`s time was held in high regard and would grow in the course of time to become a university in 1200, one among the first in Europe. Influenced by Thierry during his schooling Herman developed a positive attitude towards the Arabic science and philosophy. The Arabic influence had already been strong at the Cathedral School.</p><p>There is no doubt that the spiritual atmosphere at school and the availability of the early sources of the Islamic and Arabic scientific traditions were the challenging factors for Herman to make a decision to leave Europe  after finishing studies in Paris and start a long journey along the trails of the Arabic philosophy and science.</p>"
        opiseng = ""
        nazivhr = "Herman`s schooling in the cathedral school in Paris in 1135."
        naziveng = ""
    } else if (slika == '23.jpg') {
        opishr = "<p>Drawing from the work <em>Chronica maiora</em>, written in the 13th century by Matthew of Paris. It shows Herman Dalmatin with an astrolabe in his hand and the great ancient mathematician and scholar Euclid (4th/3rd century BC), observing the sky.</p>"
        opiseng = ""
        nazivhr = "Herman with an astrolabe"
        naziveng = ""
    } else if (slika == '24.jpg') {
        opishr = "<p>Ptolemy's geocentric system is a model of the Solar system. It is an ancient representation of the entire world, according to which the Earth is in its center.</p>"
        opiseng = ""
        nazivhr = "Ptolemy's geocentric system"
        naziveng = ""
    } else if (slika == '25.jpg') {
        opishr = "<p>The “<em>Introductorium in astronomiam</em>“ (Introduction to Astronomy) by Abu Ma`shar was the most important work in the Arabic language which circulated and  preserved Aristotle`s “<em>Natural Philosophy</em>” unknown and lost at the end of the classical period and during the Middle Ages in Europe (translated in its entirety from the Arabic in Latin by Herman in 1140)</p><p>Herman`s translation was significant for the discovery and dissemination of Aristotle`s philosophy at that time forgotten and unknown in Europe but very significant for the further development in science.</p><p>Herman`s translation was rewritten in the 12<sup>th</sup>, 13<sup>th</sup> and 14<sup>th</sup> centuries; after the invention of the printing machine it was printed twice: in Augsburg in 1489 and 1495, and in Venice in 1506.The total of eleven Harman`s translations have been preserved and make part of the various collections in the libraries of Oxford, Paris, Vatican, Florence, Manchester, Munich, Naples and other places.</p>"
        opiseng = ""
        nazivhr = "Aristotle's cosmology (from the book Andreas Cellarius Harmonia Macrocosmica)"
        naziveng = ""
    }



    if (localStorage.getItem("jezik") == "hr") {
        opis = opishr;
        naziv = nazivhr;
        confirm_button = "new game"

    } else {
        opis = opiseng;
        naziv = naziveng;
        confirm_button = "new game"
    }
    if (localStorage.getItem("jezik") == "hr") {
        confirm_button = "new game"
    } else {
        confirm_button = "new game"
    }
    $("#replay").fadeIn("slow")
    retci = $("#retci").val();
    stupci = $("#stupci").val();
    $(".modal").fadeOut("slow");
    $(".footer").fadeOut("slow");
    // SCALING OPTIONS
    // scaling can have values as follows with full being the default
    // "fit"	sets canvas and stage to dimensions and scales to fit inside window size
    // "outside"	sets canvas and stage to dimensions and scales to fit outside window size
    // "full"	sets stage to window size with no scaling
    // "tagID"	add canvas to HTML tag of ID - set to dimensions if provided - no scaling
    var scaling = "fit"; // this will resize to fit inside the screen dimensions
    if (window.innerWidth >= 1040) {
        var width = 1920;
        var height = 1200;
    } else {
        var width = 1200;
        var height = 1600;
    }
    var countPieces = 0;
    var totalPieces = 0;
    // as of ZIM 5.5.0 you do not need to put zim before ZIM functions and classes
    var frame = new Frame(scaling, width, height);
    frame.on("ready", function() {
        zog("ready from ZIM Frame"); // logs in console (F12 - choose console)
        var stage = frame.stage;
        var stageW = frame.width;
        var stageH = frame.height;
        var puzzleX;
        var puzzleY;
        frame.outerColor = "#707070";
        frame.color = "#E9DDCF";
        var con = new Container
            // with chaining - can also assign to a variable for later access
        var imageObj = [];
        var piecesArrayObj = [];
        frame.loadAssets([slika], "assets/");

        var label = new Label({
            text: "CLICK",
            size: 60,
            font: "sans-serif",
            color: "#3228B0",
            rollColor: "#2c1c9a",
            fontOptions: "italic bold"
        });

        var label2 = new Label({
            text: "CLICK",
            size: 40,
            font: "sans-serif",
            color: "#3228B0",
            rollColor: "#2c1c9a",
            fontOptions: "italic bold"
        });


        stage.addChild(label);
        stage.addChild(label2);
        label.x = label.y = 20;
        label2.y = 20;
        label2.x = stageW - 210;
        label.on("click", function() {
            zog("clicking");
        });

        label2.on("click", function() {
            location.reload();
        });

        frame.on("complete", function() {
            imageObj = frame.asset(slika).clone();
            imageObj.addTo(con);
            imageObj.alpha = 0.2;

            var piecesArray = new Array();
            var horizontalPieces = retci;
            var verticalPieces = stupci;
            var obj = getQueryString();
            zog(obj)
            if (obj) {
                horizontalPieces = obj.row;
                verticalPieces = obj.column;
            }
            var imageWidth = imageObj.width;
            var imageHeight = imageObj.height;
            var pieceWidth = Math.round(imageWidth / horizontalPieces);
            var pieceHeight = Math.round(imageHeight / verticalPieces);
            var gap = 40;
            totalPieces = horizontalPieces * verticalPieces;

            puzzleX = frame.width / 2 - imageWidth / 2;
            puzzleY = frame.height / 2 - imageHeight / 2;
            imageObj.pos(puzzleX, puzzleY);
            zog(puzzleX, puzzleY);

            label.text = countPieces + "/" + totalPieces;

            label2.text = confirm_button



            for (j = 0; j < verticalPieces; j++) {
                piecesArrayObj[j] = [];
                for (i = 0; i < horizontalPieces; i++) {
                    var n = j + i * verticalPieces;

                    var offsetX = pieceWidth * i;
                    var offsetY = pieceHeight * j;


                    var x8 = Math.round(pieceWidth / 8);
                    var y8 = Math.round(pieceHeight / 8);

                    piecesArrayObj[j][i] = new Object();
                    piecesArrayObj[j][i].right = Math.floor(Math.random() * 2);
                    piecesArrayObj[j][i].down = Math.floor(Math.random() * 2);

                    if (j > 0) {
                        piecesArrayObj[j][i].up = 1 - piecesArrayObj[j - 1][i].down;
                    }
                    if (i > 0) {
                        piecesArrayObj[j][i].left = 1 - piecesArrayObj[j][i - 1].right;
                    }

                    piecesArray[n] = new Rectangle({
                        width: pieceWidth,
                        height: pieceHeight,

                    });



                    var tileObj = piecesArrayObj[j][i];
                    var s = new Shape

                    var context = s.graphics;
                    s.drag();
                    s.mouseChildren = false;
                    s.addEventListener("pressup", function(e) {
                        var mc = e.currentTarget;

                        var xx = Math.round(mc.x);
                        var yy = Math.round(mc.y);

                        if (xx < puzzleX + gap / 2 && xx > puzzleX - gap / 2 && yy < puzzleX + gap / 2 && yy > puzzleY - gap / 2) {
                            mc.x = puzzleX;
                            mc.y = puzzleY;
                            mc.noDrag();
                            mc.addTo(mc.parent, 0);
                            mc.mouseChildren = false;
                            mc.mouseEnabled = false;
                            mc.hint.visible = false;
                            countPieces++;
                            label.text = countPieces + "/" + totalPieces;
                            zog("countPieces", countPieces);
                            if (countPieces == totalPieces) {
                                swal({
                                    html: '<h1 style="text-align:center">' + nazivhr + '</h1><img src="assets/' + slika + '" class="ikone2"/><br><br><p>' + opis + '</p>',
                                    confirmButtonText: confirm_button,
                                    allowOutsideClick: false
                                });
                                $('.swal2-confirm').click(function() {
                                    location.reload();
                                });
                            };

                            stage.update();

                        }

                    });
                    context.setStrokeStyle(3, "round");
                    var commandi1 = context.beginStroke(createjs.Graphics.getRGB(0, 0, 0)).command;
                    //
                    var commandi = context.beginBitmapFill(imageObj.image).command;


                    context.moveTo(offsetX, offsetY);

                    if (j != 0) {
                        context.lineTo(offsetX + 3 * x8, offsetY);
                        if (tileObj.up == 1) {
                            context.curveTo(offsetX + 2 * x8, offsetY - 2 * y8, offsetX + 4 * x8, offsetY - 2 * y8);
                            context.curveTo(offsetX + 6 * x8, offsetY - 2 * y8, offsetX + 5 * x8, offsetY);
                        } else {
                            context.curveTo(offsetX + 2 * x8, offsetY + 2 * y8, offsetX + 4 * x8, offsetY + 2 * y8);
                            context.curveTo(offsetX + 6 * x8, offsetY + 2 * y8, offsetX + 5 * x8, offsetY);
                        }
                    }
                    context.lineTo(offsetX + 8 * x8, offsetY);
                    if (i != horizontalPieces - 1) {
                        context.lineTo(offsetX + 8 * x8, offsetY + 3 * y8);
                        if (tileObj.right == 1) {
                            context.curveTo(offsetX + 10 * x8, offsetY + 2 * y8, offsetX + 10 * x8, offsetY + 4 * y8);
                            context.curveTo(offsetX + 10 * x8, offsetY + 6 * y8, offsetX + 8 * x8, offsetY + 5 * y8);
                        } else {
                            context.curveTo(offsetX + 6 * x8, offsetY + 2 * y8, offsetX + 6 * x8, offsetY + 4 * y8);
                            context.curveTo(offsetX + 6 * x8, offsetY + 6 * y8, offsetX + 8 * x8, offsetY + 5 * y8);
                        }
                    }
                    context.lineTo(offsetX + 8 * x8, offsetY + 8 * y8);
                    if (j != verticalPieces - 1) {
                        context.lineTo(offsetX + 5 * x8, offsetY + 8 * y8);
                        if (tileObj.down == 1) {
                            context.curveTo(offsetX + 6 * x8, offsetY + 10 * y8, offsetX + 4 * x8, offsetY + 10 * y8);
                            context.curveTo(offsetX + 2 * x8, offsetY + 10 * y8, offsetX + 3 * x8, offsetY + 8 * y8);
                        } else {
                            context.curveTo(offsetX + 6 * x8, offsetY + 6 * y8, offsetX + 4 * x8, offsetY + 6 * y8);
                            context.curveTo(offsetX + 2 * x8, offsetY + 6 * y8, offsetX + 3 * x8, offsetY + 8 * y8);
                        }
                    }
                    context.lineTo(offsetX, offsetY + 8 * y8);
                    if (i != 0) {
                        context.lineTo(offsetX, offsetY + 5 * y8);
                        if (tileObj.left == 1) {
                            context.curveTo(offsetX - 2 * x8, offsetY + 6 * y8, offsetX - 2 * x8, offsetY + 4 * y8);
                            context.curveTo(offsetX - 2 * x8, offsetY + 2 * y8, offsetX, offsetY + 3 * y8);
                        } else {
                            context.curveTo(offsetX + 2 * x8, offsetY + 6 * y8, offsetX + 2 * x8, offsetY + 4 * y8);
                            context.curveTo(offsetX + 2 * x8, offsetY + 2 * y8, offsetX, offsetY + 3 * y8);
                        }
                    }
                    context.lineTo(offsetX, offsetY);
                    s.addTo(con);

                    var fill = new createjs.Graphics.Fill("red");

                    //var newGra = context.append(fill);
                    var hint = new Shape(); //s.clone(true);
                    hint.mouseChildren = false;
                    hint.mouseEnabled = false;
                    s.hint = hint;
                    hint.graphics = context.clone(true);
                    hint.pos(puzzleX, puzzleY);
                    // newGra.graphics = newGra;
                    hint.graphics._fill = fill;
                    hint.graphics._fill.style = null;

                    hint.addTo(con, 0);
                    //s.animate({obj:{x:frame.width-offsetX-pieceWidth,y:frame.height-offsetY-pieceHeight}, time:700});
                    //s.animate({obj:{x:-offsetX,y:-offsetY}, time:700});
                    s.animate({
                        obj: {
                            x: rand(-offsetX, frame.width - offsetX - pieceWidth),
                            y: rand(-offsetY, frame.height - offsetY - pieceHeight)
                        },
                        time: 700
                    });

                }
            }


            con.addTo(stage);
            /*con.x -= imageWidth/2;
            con.y -= imageHeight/2;*/
            stage.update();



        }); // end asset complete


        stage.update(); // this is needed to show any changes

    }); // end of ready
}