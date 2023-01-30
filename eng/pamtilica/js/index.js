// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen
$("footer").hide();


sadrzaj = 'smiljan'
$("#prva").click(function() {
    razina = "1";
    igra()
})
$("#druga").click(function() {
    razina = "2";
    igra()
})



function igra() {
    $("body").addClass("crvenko")
    if (razina == 1) {
        broj_karata = 4;

    } else if (razina == 2) {
        broj_karata = 8;
    } else if (razina == 3) {
        broj_karata = 12;
    } else if (razina == 4) {
        broj_karata = 16;
    }
    $("footer").fadeIn(1000);
    $(".modal").fadeOut(1000);
    $(".modal-overlay").delay(1000).slideUp(1000);
    $(".game").show(1000);
    $("#okretanje")[0].play();
    $(".brojevi").addClass("crveni_broj")
        //localStorage.clear();
    var br = 1;
    var sec = 0;
    var pokusaj = 0;
    var vrijeme = 1;
    var bodovi = 0;
    var najbolje_vrijeme;
    var najmanji_broj_pokusaja;
    var karte;

    function pad(val) {
        return val > 9 ? val : "0" + val;
    }
    setInterval(function() {
        if (vrijeme == 1) {
            $("#seconds").html(pad(++sec % 60));
            $("#minutes").html(pad(parseInt(sec / 60, 10)));
        }
    }, 1000);

    var Memory = {
        init: function(cards) {
            this.$game = $(".game");
            this.$modal = $(".modal");
            this.$overlay = $(".modal-overlay");
            this.$biti = $(".smiljan");
            this.cardsArray = $.merge(cards, cards);
            this.shuffleCards(this.cardsArray);
            this.setup();
        },
        shuffleCards: function(cardsArray) {
            this.$cards = $(this.shuffle(this.cardsArray));
        },
        setup: function() {
            this.html = this.buildHTML();
            this.$game.html(this.html);
            this.$memoryCards = $(".card");
            this.binding();
            this.paused = false;
            this.guess = null;
            this.$cards = $(this.shuffle(this.cardsArray));
        },

        binding: function() {
            this.$memoryCards.on("click", this.cardClicked);
            this.$biti.on("click", $.proxy(this.reset, this));
        },
        // kinda messy but hey
        cardClicked: function() {
            $("#okret")[0].play();
            var _ = Memory;
            var $card = $(this);
            if (!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")) {
                $card.find(".inside").addClass("picked");
                if (!_.guess) {
                    _.guess = $(this).attr("data-id");
                    $(this).find('p').toggle();
                } else if (_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")) {
                    $(".picked").addClass("matched");
                    $("#win")[0].play();
                    bodovi = bodovi + 15;
                    _.guess = null;
                    $(".matched").find('p').remove();
                    pokusaj++;

                    vrijeme = 0;
                    swal({
                        title: '' + $(this).attr('data-ime'),
                        html: '<img src="slike/' + sadrzaj + "/" + $(this).attr('data-id') + '.jpg" class="ikone"/><p>' + $(this).attr('data-opis') + '</p>',
                        showCloseButton: true,
                        confirmButtonText: 'next',
                        /*allowOutsideClick: false,*/
                        /*allowEscapeKey: false*/
                        onClose: () => {
                            vrijeme = 1;
                            $.stopSound();
                        }
                    })
                } else {
                    pokusaj++;
                    $(this).find('p').toggle();
                    _.guess = null;
                    _.paused = true;
                    setTimeout(function() {
                        $(".picked").removeClass("picked");
                        Memory.paused = false;
                        $(".brojevi").show();
                        bodovi = bodovi - 5
                    }, 1200);
                }
                if ($(".matched").length == $(".card").length) {
                    _.win();
                }
            }
        },

        win: function() {
            this.paused = true;
            setTimeout(function() {
                Memory.showModal();
                Memory.$game.fadeOut();
            }, 1000);
        },

        showModal: function() {
            var minute = Math.floor(sec / 60);
            var sekunde = sec - minute * 60;
            this.$overlay.show();
            this.$modal.fadeIn("slow");
            var najvrijeme = localStorage.getItem('najvrijeme');

            if (najvrijeme === undefined || najvrijeme === null) {
                najvrijeme = sec;
                localStorage.setItem('najvrijeme', sec);
            }

            // If the user has more points than the currently stored high score then
            if (sec < najvrijeme) {
                // Set the high score to the users' current points
                najvrijeme = sec;
                // Store the high score
                localStorage.setItem('najvrijeme', sec);
            }
            // Return the high score

            var najpokusaji = localStorage.getItem('najpokusaji');

            if (najpokusaji === undefined || najpokusaji === null) {
                najpokusaji = pokusaj;
                localStorage.setItem('najpokusaji', pokusaj);
            }

            // If the user has more points than the currently stored high score then
            if (pokusaj < najpokusaji) {
                // Set the high score to the users' current points
                najpokusaji = pokusaj;
                // Store the high score
                localStorage.setItem('najpokusaji', pokusaj);
            }
            var naj_minute = Math.floor(najvrijeme / 60);
            var naj_sekunde = najvrijeme - naj_minute * 60;
            $(".modal").show();
            $(".modal-overlay").show();
            $(".winner").hide();
            bodovi = bodovi - sec
            $(".modal").html("<div class='winner'>Bravo!</div><div class='time'><br>broj pokušaja : " + pokusaj + "</br>vrijeme spajanja : " + minute + ":" + sekunde + "</br>bodovi: " + bodovi + "<p><br><a href='index.html' style='color:black;'>pokreni novu igru</a></p></div>");

            var target = document.getElementById("ikona");
            var emojiCount = emoji.length;

            for (var index = 0; index < emojiCount; index++) {
                addEmoji(emoji[index]);
            }

            function addEmoji(code) {
                var option = document.createElement('option');
                option.innerHTML = code;
                option.value = code;
                target.appendChild(option);
            }


            if (localStorage.getItem("ime") != null) {
                $('#312289462').val(localStorage.getItem("ime"))
                $('#ikona').val(localStorage.getItem("ikona"))
            }




        },

        hideModal: function() {
            this.$overlay.hide();
            this.$modal.hide();
        },

        reset: function() {
            this.hideModal();
            this.shuffleCards(this.cardsArray);
            this.setup();
            this.$game.show(1000);
            pokusaj = 0;
            sec = 0;
            br = 1;
            $(".back").addClass("pozadina-biti");
        },

        // Fisher--Yates Algorithm -- http://bost.ocks.org/mike/shuffle/
        shuffle: function(array) {
            var counter = array.length,
                temp, index;
            // While there are elements in the array
            while (counter > 0) {
                // Pick a random index
                index = Math.floor(Math.random() * counter);
                // Decrease counter by 1
                counter--;
                // And swap the last element with it
                temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
            }
            return array;
        },

        buildHTML: function() {
            var frag = '';
            br = 1;
            var lista_slika = [];
            var lista_imena = [];
            this.$cards.each(function(k, v) {

                frag += '<div class="card" data-id="' + v.id + '" data-opis="' + v.opis + '" data-ime="' + v.ime + '"><div class="inside">\
                    <div class="front"><img src="slike/' + sadrzaj + "/" + v.id + '.jpg"\
                    alt="' + v.id + '" data-ime="' + v.name + '" /></div>\
                    <div class="back"><p class="brojevi">' + br + '</p></div></div>\
                    </div>';
                if (br < cards.length) {
                    br++;
                };
            });
            return frag;
        }
    };
    if (sadrzaj == "smiljan") {
        var cards = [{
                ime: "Herman`s Homeland – St. Peter`s in the Woods, Istria, Croatia",
                opis: "<p><strong>Herman Dalmatin</strong> (<em>Hermannus Dalmata, Hermannus Sclavus, Hermannus Secundus, Hermannus de Carinthia</em> - in Latin ) was born round 1100 in central Istria. He is the oldest Croatian scholar of the world-wide fame and one among the greatest brains, a philosopher and a translator of the scientific writings from the Arabic in the Latin language. It is through those translations that the Arabic science and the lost work of the greatest ancient scholars like Aristotle, Ptolemaeus, Eukleides and others were introduced to Europe.</p><p>Herman is believed to have finished his initial education in SS. Peter and Paul`s in the Woods Benedictine monastery, or in some other  Benedictine monastery located on the west coast of Istria where he lived and received education until he was 20 years of age.</p>",
                id: 1,
            }, {
                ime: "Map of Herman`s Itinerary",
                opis: "<p>Having completed his education in Istria, at the age of twenty, young Herman studies in Chartres and Paris and finishes his studies in 1135; in the period between the first and the second Crusades he sets out on an educational travel being attracted to the Arabic science and philosophy. He travels along the Adriatic coast, Durres and Constantinople following the routes of the Crusaders. From 1135 to 1138 he travels  to Palestine and moves further on  across the Muslim World living in the cultural centres (Damascus, Baghdad, Aleppo, Edessa and others) learning Arabic and studying science and philosophy. On his return to Europe along the Mediterranean coast Herman is very active in translating and also engaged in science . He sojourns in many towns across Spain and France.</p><p>It is in the translation centre along the Ebro river that Herman comes across Peter Venerabilis, a monk in the Cluny monastery, the first one to initiate the studies of Islam in Western Europe. Herman joins the inner circle of the monk`s associates and in his company travels all over Spain.</p><p>In the rich Moorish libraries he searches for the best translation patterns. Then he leaves for Leon, the centre of the kingdom of Castille; in the northwest pursuing the scientific work and translating ; he is the founder of his own translating school there.</p><p>His next destination is Toulouse in the south of France followed by Beziers where he has finished his most significant work.</p><p>After 1143 there is no more data about Herman`s life or work.</p>",
                id: 2
            }, {
                ime: "Herman`s education in the famous Chartres Cathedral School",
                opis: "<p>After two decades of Herman`s life in Istria and the  Benedictine Abbey</p><p>he continues his education up until 1134 in Chartres, France, in one of the best Cathedral schools in Europe of that time. The school enjoyed an exceptional reputation as its teachers were many prominent philosophers, theologists and scientists .The school in Chartres had an important role in the development of the European science during the 11<sup>th</sup> and 12<sup>th</sup> centuries due to its openness to the different traditions (ancient Greek and Arabic) as well as the high standards of teaching. This is the period of big changes in the scientific and philosophical thinking concepts in the path leading to the Renaissance era . Herman lived in time when only cathedral schools were available ; they were the predecessors to the institutions of high learning and the first universities in Europe.</p><p>There are no records showing Herman belonging to either the Benedictines or any other order. During his time only few laymen were engaged in philosophy or science. Herman`s decision to leave his homeland after completing school in  the Benedictine Cathedral School is the indication that he acquired  a solid knowledge in trivium - grammar, rhetoric and logic as well as quadrium - arithmetic, geometry, astronomy and music) allowing  him to further improve and develop his intellectual interests.</p>",
                id: 3
            }, {
                ime: "Allegorical images of the Sun taken from the “Introductorium in astronomiam” (Introduction to Astronomy) by Abu Ma`shar, the Arabic scientist and astronomer, translated in its entirety from the Arabic in Latin by Herman in 1140.",
                opis: "<p>The “<em>Introductorium in astronomiam</em> “ by Abu Ma`shar was the most important work in the Arabic language which circulated and preserved Aristotle`s “<em>Natural Philosophy</em>” unknown and lost at the end of the classical period and during the Middle Ages in Europe.</p><p>Herman`s translation was significant for the discovery and dissemination of Aristotle`s philosophy at that time forgotten and unknown in Europe but very significant for the further development in science.</p><p>Herman`s translation was rewritten in the 12<sup>th</sup>, 13<sup>th</sup> and 14<sup>th</sup> centuries ; after the invention of the printing machine it was printed twice: in Augsburg in 1489 and 1495, and in Venice in 1506.The total of eleven Harman`s translations have been preserved and make part of the various collections in the libraries of Oxford, Paris, Vatican, Florence, Manchester, Munich, Naples and other places.</p><p>In the period from 1138 to 1142 Herman was engaged both in translating and the scientific work while working in the translating centres along the Ebro river in Spain. After his return from the educational travel across the Arabic countries he completed a dozen translations and compilations and also produced an original work of his authorship. Herman opened a treasure trove in the Arabic knowledge, a creation from two sources : ancient Greek and Eastern concepts. The material translated by Herman and his contemporaries in the 12<sup>th</sup> century was reaching the schools of Western Europe influencing the development and teaching trends and challenging intellectual activity at universities of the western Europe until the end of the Middle Ages ; it resulted in something new, the new quality leading to huge conceptual changes in science and philosophy during the Renaissance which would witness the birth of the modern science and philosophy. However, the process of knowledge communication, transformation, the acceptance of knowledge and philosophical aspects is more complex than it seems at a glance. Apart from the influences of the Arabic and ancient Greek philosophies and science,very obvious are the influences from the different eastern wisdom like Persian, Chinese and Indian; that was reflected in the work Herman had written or translated and as such passed over to the Latin western Christianity.</p></p>",
                id: 4
            },
            {
                ime: "Hermanov prevoditeljski i znanstveni rad u centrima uz rijeku Ebro, tijekom razdoblja od 1138. do 1142. godine, kada je vrativši se s Bliskog istoka u Europu, priredio desetak prijevoda i kompilacija.",
                opis: "<p>Tijekom petogodi&scaron;njeg razdoblja od 1138. do 1142. godine, koje je nakon povratka s Bliskog istoka proveo na Iberskom poluotoku (&Scaron;panjolska), u području uz rijeku Ebro, Herman se zajedničkim izučavanjima i intenzivnim prevoditeljskim radom intenzivno povezao s Robertom iz Kettona. O suradnji i predanom radu svjedoči odlomak iz Hermanova djela <em>De essentiis</em> u kojem se sa zahvalno&scaron;ću obraća Robertu i podsjeća ga na duga i naporna zajednička izučavanja, koja su im otvarala riznice arapskog znanja nastalog na temeljima dvaju izvora: starogrčkih i istočnjačkih shvaćanja.</p><p>Ono &scaron;to su Herman i njegovi suvremenici u 12. stoljeću prevodili, prenosilo se i &scaron;irilo u &scaron;kolama zapadne Europe, te je utjecalo na razvoj i usmjerenje nastave i intelektualne djelatnosti na sveučili&scaron;tima zapadne Europe sve do konca srednjeg vijeka. Također, to je bio početak stvaranja nečeg kvalitativno novog, kao i dio priprema koje su vodile velikim konceptualnim promjenama u znanosti i filozofiji tijekom renesanse, kada se zasnivaju i oblikuju temelji novovjekovne znanosti i filozofije. Međutim, proces prijenosa, transformacije i prihvaćanja znanja i filozofskih pogleda mnogo je složeniji nego se to na prvi pogled čini. U tom procesu, pored utjecaja arapske i starogrčkih filozofija i znanosti prisutni su vidljivi utjecaji i različitih istočnjačkih znanja kao perzijskih, indijskih i kineskih, &scaron;to se odražava i u djelima koja je Herman prevodio i pisao, te ih tako posredovao latinsko-kr&scaron;ćanskom Zapadu.</p>",
                id: 5
            },
            {
                ime: "Herman`s association with the famous School of Translators in Toledo",
                opis: "<p>The Reconquista of Spain did not prevent the educated Christians, Moors (Arabs) and Jews alike from researching together the precious manuscripts from the Moorish libraries that would be translated and compiled into new,original pieces. Their efforts resulted in a cultural phenomenon well known as “<em>Escuela de traductores de Toledo</em>” (The Toledo School of Translators), a place where scholars gathered and engrossed in translating.</p><p>Herman himself kept contact with the school. He was known at school for his translation from 1138 of the sixth book called “<em>Fatidica</em>” (Fortuneteller) written by Sahl ibn Bishra. The work is a collection of discussions about planets and the divinations which result from the retrograde planet motions and interrelated positions as well as the predictions based on the observation of the comet movements.</p><p>The copies of Herman`s translation of “<em>Fatidica</em>” are kept in the Vatican, Cambridge, Oxford,Matz; it was first printed in 1529 in Prague.</p><p>Sheila Law-Beer, New York, 1979 included the segments from the translation of “Fatidica” in her doctoral thesis.</p>",
                id: 6
            },
            {
                ime: "Herman moves to Beziers (in France ) in 1143 to complete his most significant work <em>De Essentiis</em> (On Essences)",
                opis: "<p>The work deals with the organization of the world and explains Herman`s own natural philosophy and cosmology .It is based on Aristotelianism Herman had found in the Abu Ma`shar`s work and also Platonism that he was introduced to while in Charters .</p><p>The work played an important role in the future development of science.</p><p>Four transcripts have been preserved and are kept in Naples, London, Oxford and Epsom. ”On Essences” was published three times: in 1946 in Latin (Santander ), in Latin-English (Leiden Koln, in 1982) and in Latin-Croatian (Pula, in 1990).</p>",
                id: 7
            },
            {
                ime: "Astrolab (Star-taker)",
                opis: "<p>Astrolab (Latin - <em>Astrolabium)</em> is an ancient astronomical instrument developed by the Arabic scientists; its introduction was significant in the development of both theoretical and practical astronomy in the Western Europe. It was used to define the position of the planets and stars. Before the invention of the sextant in the 18<sup>th</sup> century it was an important navigational instrument.</p><p>The instrument was also used in astrology .</p><p>Herman`s translation of Ptolomaeus`s “<em>Planisfer</em>a” (preserved in the Arabic translation) which was lost and unknown in Europe assisted in the application of astrolabe in Europe .It contains stereographic projections of celestial sphere on a plane and was used as a theoretical background for the construction of the astrolab in the Latin West during the Middle Ages. Eight transcripts of Herman`s manuscript have been preserved and are stored in the Vatican, Paris, Lyon, Dresden and Oxford.</p><p>Herman`s translation of the “<em>Planisphere” </em>was printed several times : in Venice in 1507/8, Nurnberg in 1531, Basel in 1536, in Venice in 1558. A critical edition: Heiberg, “<em>Ptolemaie Opera Astronomica Minora</em> “ was compiled in 1907 in Lepzig.</p>",
                id: 8
            },
            {
                ime: "Herman`s drawing added to the excerpts of the eclipse of the Sun and the Moon from the “De essentiis” (On Essencies), Besiers,1143; Transcript from the 14<sup>th</sup> century, London,British Musem",
                opis: "<p>Mathematics made a part of Herman`s scientific work. He noticed that mathematics is related to the natural laws. Based on Euclid`s <em>“Elements</em>”.</p><p>Herman is trying to prove the established astronomical assumptions by applying mathematics . Contrary to the mathematical tradition of the time he adopted a new approach – mathematical evidence. The evidence is essential and that is the new approach that is discussed in his masterpiece “De essentiis” (On Essencies). The logical structure of mathematics did not play a significant role in the medieval tradition and mathematics was considered only in the interaction with philosophy. In this respect Herman`s work marked the beginning of the application of the Euclid`s methodology which would open doors for the modern science into the Renaissance.</p>",
                id: 9
            },
            {
                ime: "Herman`s contribution to an early introduction of Islam to Europe",
                opis: "<p>Cordoba was the centre of the Moorish Spain and it developed in to a thriving capital of the Caliphate of Cordoba. (756 – 1035) . Together with Baghdad it was one of the most important and the wealthiest centre of the Islamic culture and art of that time. About year 1000 Cordoba was one of the largest town in the world with the population of half a million inhabitants, showing the power and the expansion of the Islamic civilization in Southern Europe. The Muslims made the majority of population but Christians and Jews lived there and also sojourned in Seville and Toledo. At the time when Europe and all Christian world fear the militant Islam a group of some educated Europeans of humanistic orientation emerged in the middle of the 12<sup>th</sup> century which was characterised by waging wars between the Christians and the Islamic forces. Encouraged by the fact that there were some Muslim and Christian communities coexisting peacefully in some parts of the Mediterranean the group are trying to start an open and amicable dialogue .In order to better understand Islam the agenda of the group would be based on reason, tolerance and love.</p><p>The promoter of the first studies in Islam in Europe was Peter Venerabilis,the ninth abbot of the reformed Benedictines with their central abbey in Cluny.</p><p>In 1142 Peter included Herman Dalmatin in his close circle of associates and translators highly appreciating Herman`s comprehensive education,extensive knowledge and translating skills.</p><p>Peter Venerabilis travelled the Iberian Peninsula to bring together the group of skilled associates including himself to do the research in the Moorish libraries across Spain in order to find best suited material .He wanted to collect the translated works from the Arabic language about Islam ; the texts would be included in the corpus about the Islam in Latin . In this way, the Islamic teaching would be introduced directly from the religious Islamic transcripts to the Western Europe at that time ignorant of the Muslim religion .</p><p>It was in 1142 that along the Ebro river Petrus Venerabilis meets Herman Dalmatin and his colleague and companion Robert from Ketton. They are assigned the task of translating the central religious text of Islam – the Quran (Qur`an) ; they are also given some additional Islamic texts. The goal was to produce the first ever Islamic corpus in Latin.</p><p>Herman`s translation of Qu`ran was a collaborative work but he alone also translated two additional Islamic religious pieces: “ <em>De generatione Mahumet </em>“</p><p> (The Birth of Muhammad) and “<em>Doctrina Muhamet“</em> (The Doctrine of Muhammad) .Herman was also assisting in the compilation of the</p><p>“ <em>Chronica Saracenorum</em> “ (The Chronicle of the Saracens ). It was also a very important piece in the presentation of Islam to the Christian Europe.</p><p>The manuscripts of Herman`s translations of the Islamic scripts are kept in the libraries in Paris, Oxford, Vatican and Cambridge; they were printed in Basel in 1550, after the invention of the printing machine.</p>",
                id: 10
            },
            {
                ime: "First translation of Euclid`s<em>“Elements”</em>",
                opis: "<p>Herman Dalmatin was the first to edit the first translation of Euclid`s <em>“Elements</em>”, a masterpiece of ancient mathematics which was lost in its integral form and unknown in Europe during the Middle Ages.</p><p>It is one of the most influential mathematical work of all time and it has had a countless number of editions .It explains the first strict axiomatic mathematical deductive system.</p><p>It entails the elementary mathematics : arithmetic (theory of numbers), synthetic geometry (point, line, surface and solid) and algebra.</p><p>The picture illustrates a page from the first printed edition from 1482 translated from the Arabic into the Latin language.</p>",
                id: 11
            },
            {
                ime: "The map of Istria - Herman`s homeland",
                opis: "<p>Herman belonged to the Croatian ethnic group which was prevalent in Istria in the 12<sup>th</sup> century. In the Middle Ages there were no surnames in today`s sense of the word. There were other Hermans who also were engaged in science and philosophy . (Herman Contractus in the 11<sup>th</sup> century, Herman Alemannus from the 13<sup>th</sup> century ). Adjectives were used to define the ethnic group, native country or some personal traits; Herman, the Croatian scientist, is referred to as Herman Sclavus.</p><p>Herman `s capital work “<em>De essentiis</em>”, (On Essences) was signed himself as <strong>Herman Secundus</strong> (as opposed to Herman Contractus from the 11<sup>th</sup> century).</p><p>Herman is referred to as <strong>Herman de Carinthia</strong> by some 20<sup>th</sup> century authors because a part of Istria historically used to belong to the Frankish duchy in Carinthia. In Herman`s time the notion of Carinthia and Dalmatia could not territorially be distinguished. Adjective <strong>Dalmata</strong> added to Herman`s name was first used by Petrus Venerabilis (Peter the Honourable), with reference to Herman`s origin,in the territorial sense, to the Roman Province Dalmatia (territorially very close to Herman`s native country). <strong>Dalmata</strong> was also associated with Herman`s name in the scripts of the famous Toledo Translators School that Herman was associated with.</p>",
                id: 12
            },
            {
                ime: "Herman Dalmatin – Bust, work by Mladen Mikulin, the sculptor ",
                opis: "<p>Herman Dalmatin is the oldest scientist of worldwide fame and one of the greatest scholars of Croatia, a philosopher and a translator of the scientific work from the Arabic into Latin language. His work and prolific opera and translations from Arabic into Latin were instrumental in the development of the Western European science and philosophy. His opera (fifteen compilations and translations) contributed significantly to the development of philosophy and exact science in the period preceding the opening of the first universities in Europe. He was drawn to the Arabic science and philosophy which reached their peak during that period ; driven by his intellectual curiosity and active spirit Herman and his English friend, Robert from Ketton (Chester ), set out on a long educational travel, a venture across the Islamic countries and the Arabic scientific and cultural centres that would all be reflected in his work.</p><p>Herman lived and worked at the crossroads of diverse civilizations, in the cultural centres of mixed traditions,thinking and influence. It was the time of the Crusades and he believed that a better insight into the Islam could result in the mutual understanding and peace.</p><p>That might explain why he joined Robert from Ketton to translate Qu`ran into Latin to be done for the first time ever ; the idea was suggested to him by Peter Venerabilis, a monk from the monastery in Cluny. Additionally, Herman translated two more influential Islamic writings “<em>De generatione Mahumet</em>”</p><p>(Muhammad `s Birth) and “ <em>Doctrina Mahumet “</em> (Muhammad`s Teaching) which contributed greatly in the early understanding of the Islam in Europe.</p>",
                id: 13
            },
            {
                ime: "Herman took a particular interest in the Arabic astronomy and astrology which made science at that time",
                opis: "He translated two more astrologic compilations : “<em>Liber ibrium</em>“ (On Precipitations ) in 1140, and “<em>De indagatione coris</em> “ (On Heart Research), later in 1140. The compilations included pieces from the different sources (Arabic, Indian and ancient Greek).",
                id: 14
            },
            {
                ime: "Herman`s schooling in the cathedral school in Paris in 1135",
                opis: "<p>During his schooling in Chartres and Paris Herman was influenced by Thierry in Chartres, a very famous scholar who contributed to Herman`s solid knowledge in philosophy, natural physics, astronomy, astrology and mathematics; that would eventually shape him as a philosopher and scientist challenging him to be involved in an independent scientific, philosophical and translating work .</p><p>The Cathedral School in Paris in Herman`s time was held in high regard and would grow in the course of time to become a university in 1200, one among the first in Europe. Influenced by Thierry during his schooling Herman developed a positive attitude towards the Arabic science and philosophy .The Arabic influence had already been strong at the Cathedral School.</p><p>There is no doubt that the spiritual atmosphere at school and the availability of the early sources of the Islamic and Arabic scientific traditions were the challenging factors for Herman to make a decision to leave Europe after finishing studies in Paris and start a long journey along the trails of the Arabic philosophy and science.</p>",
                id: 15
            },
            {
                ime: "SS Peter and Paul`s Benedictine monastery from the 12<sup>th</sup> century located in the place called St. Peter`s in Woods",
                opis: "<p>Herman Dalmatin started his schooling in one of the Benedictine schools in his native country of Istria. The monasteries were the focal points of the education and intellectual work in Istria and Dalmatia during the 13<sup>th</sup> century; they played an important role in the process of literacy and (education) schooling.</p><p>All Benedictine schools in Europe, consequently in Istria too, had a unique curriculum called <strong><em>septem artes liberales</em></strong> (seven liberal skills) and included :</p><p><strong>Trivium</strong> where grammar, retorics and dialectics were taught</p><p> and</p><p><strong>Quadrivium </strong>where arithmetic,geometry, astronomy and music were taught.</p><p>Consistent with the curriculum standards Herman had to master Latin and acquire solid knowledge from the trivium and quadrivium in order to pursue schooling and attend any of the Cathedral schools in Chartres and Paris which at the time were the most prestigious schools in the Western Europe.</p>",
                id: 16
            }
        ]
    }


    if (razina == 1) {

        cards = cards.slice(0, 4)

    }

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    cards = shuffle(cards);

    cards = cards.slice(0, broj_karata);

    Memory.init(cards);
    $(".brojevi").addClass("crveni_broj");

    if (razina == 1) {
        $(".card").css({
            "width": "25%",
            "height": "50%"
        })
    } else if (razina == 2) {
        $(".card").css({
            "width": "25%",
            "height": "25%"
        })
    }

    $(".back").addClass("pozadina-biti");
}