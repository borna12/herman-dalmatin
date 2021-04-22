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
                        confirmButtonText: 'dalje',
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
                ime: "Sv. Petar u Šumi, Istra, Hrvatska",
                opis: "<p><strong>Herman Dalmatin</strong> (lat. Hermannus Dalmata, Hermannus Sclavus, Hermannus Secundus, Hermannus de Carinthia) rođen u sredi&scaron;njoj Istri oko 1100. godine, najstariji je hrvatski učenjak svjetskoga glasa i ujedno jedan od najvećih hrvatskih mislilaca, filozof i prevoditelj znanstvenih djel&acirc; s arapskoga na latinski jezik. Iz njegovih prijevoda zapadna Europa upoznaje se s arapskom znano&scaron;ću i zagubljenim djelima Aristotela, Ptolemeja, Euklida i drugih Pretpostavlja se kako je početno obrazovanje stekao najvjerojatnije u benediktinskom samostanu sv. Petra i Pavla u &Scaron;umi ili u nekom drugom benediktinskom samostanu smje&scaron;tenom na zapadnoj obali Istre u kojoj je živio i &scaron;kolovao se do oko dvadesete godine života.</p><p>Herman je pripadao hrvatskoj etničkoj skupini koja je u sredi&scaron;njoj Istri u 12. stoljeću bila najbrojnija. U srednjem vijeku nisu postojala prezimena u dana&scaron;njem smislu. Postojalo je vi&scaron;e Hermana koji su se bavili filozofijom i znano&scaron;ću (Herman Contractus iz 11.st., Herman Alemannus iz 13.st.). Pridjevcima se upućivalo na etničku pripadnost, rodni zavičaj ili neko osobno obilježje, pa tako hrvatskog učenjaka navode i kao <strong>Herman</strong> <strong>Sclavus. </strong>U raspravi De essentiis on sam potpisuje se s <strong>Herman Secundus </strong>( u odnosu na starijeg Hermana Contractusa iz 11. stoljeća). Neki autori iz 20. st. navode ga kao <strong>Herman de Carinthia</strong>, budući je jedan dio Istre tog doba pripadao franačkoj vojvodini Koru&scaron;koj. U Hermanovo doba pojam Koru&scaron;ke i Dalmacije nije se mogao jasno teritorijalno razgraničiti. Pridjevak <strong>Dalmata</strong> uz Hermanovo ime upotrebio je opat iz Clunyja Petrus Venerabilis, a označavo je Hermanovo podrijetlo u teritorijalnom smislu nekada&scaron;nje rimske provincije Dalmacije (teritorijalno bliske Hermanovu zavičaju).</p><p>Pridjevak Dalmata koristio se uz Hermanovo ime i u tekstovima glasovite Toledske prevoditeljske &scaron;kole s kojom je bio povezan.</p>",
                id: 1,
            }, {
                ime: "Karta Hermanovih putovanja",
                opis: "<p>- Herman se &scaron;kolovao u Istri, zatim u Chartesu i Parizu</p><p>- Preko obala Jadrana, Drača i Carigrada, odlazi za Palestinu i putuje zemljama Bliskog istoka, gdje uči arapski i izučava arapsku znanost i filozofiju</p><p>- Vrativ&scaron;i se uz obale Sredozemlja u Europu, bavio se prevoditeljskim i znanstvenim radom i boravio u centrima na području &Scaron;panjolske i Francuske</p><p>Herman Dalmatin je &scaron;kolovanje započeo u benediktinskoj samostanskoj &scaron;koli u rodnoj Istri, a nastavio je kao dvadesetogodi&scaron;njak u glasovitim katedralnim &scaron;kolama u Chartresu i Parizu. Privučen arapskom znano&scaron;ću i filozofijom koje upravo u tom razdoblju dosežu svoj vrhunac i vođen intelektualnom radoznalo&scaron;ću i živim duhom po zavr&scaron;etku studija zajedno s Robertom iz Kettona (Chestera) putuje obalom Jadrana i dalje preko Carigrada na vi&scaron;egodi&scaron;nje studijsko-znanstveno putovanje zemljama i znanstveno-kulturnim centrima Bliskog istoka (Damask, Bagdad, Alep, Edesa i dr.), &scaron;to će se presudno odraziti na njegov daljnji rad. Nakon povratka s Istoka putujući zemljama Mediterana, uz sjeverno Sredozemlje do obala &Scaron;panjolske nastanjuje se u &Scaron;panjolskoj na Iberskom poluotoku. Tamo putuje i djeluje u različitim kulturnim i prevoditeljskim sredi&scaron;tima arapske &Scaron;panjolske, gdje se posvećuje intenzivnom i plodnom prevoditeljskom i spisateljskom radu. Nakon &scaron;to su Herman i Robert uz rijeku Ebro, susreli opata samostana u Clunyju Petra Časnog (Petrus Venerabilis), začetnika prvih istraživanja islama u zapadnoj Europi, pridružuju se uskom krugu njegovih suradnika i putuju u pratnji opata &Scaron;panjolskom. Herman istražuje bogate maurske biblioteke, kako bi odabrao najbolje predlo&scaron;ke za prevođenje. Odlazi na sjeverozapad u grad L&eacute;on, centar tada&scaron;nje kraljevine Castille, gdje uz bavljenje prevođenjem i znanstveni rad zasniva i vlastitu &scaron;kolu. Zatim putuje na jugu Francuske, prvo u Thulouse, a zatim u B&eacute;ziers, gdje 1143. godine dovr&scaron;ava svoja najznačajnija djela. Nakon 1143. nema vi&scaron;e podataka o Hermanovu životu i radu.</p>",
                id: 2
            }, {
                ime: "Hermanovo usavršavanje u glasovitoj katedralnoj školi u Chartresu",
                opis: "<p>Nakon prva dva desetljeća života vezanog uz Istru i benediktinsku opatiju u kojoj se &scaron;kolovao, Herman Dalmatin od 1130. godine &scaron;kolovanje nastavlja u Chartresu, u jednoj od u to vrijeme najpoznatijih katedralnih &scaron;kola Francuske, gdje pohađa vi&scaron;i studij <em>artium</em>. &Scaron;kolu u Chartresu je koncem 10. stoljeća utemeljio biskup Chartresa Fulbert razvijajući profane discipline <em>trivium</em> i <em>quadrivium</em>. Vrsnim poučavanjem i razvojem različitih disciplina &scaron;kola u Chartresu u prvoj polovici 12. stoljeća doživljava procvat i svoje zlatno doba u razdoblju od 1100. do 1160. godine. U njoj su tada predavali mnogi glasoviti filozofi, teolozi i znanstvenici zbog kojih je &scaron;kola uživala izniman ugled. Zbog usmjerenja i visoke razine studija imala je važnu ulogu u 11. i 12. stoljeću, upravo u razdoblju kada dolazi do velikih promjena u znanstvenim i filozofskim shvaćanjima u zapadnoj Europi Herman se je živio u razdoblju kada su postojale samo samostanske &scaron;kole i koje je prethodilo razvoju visoko&scaron;kolskih institucija i pojavi prvih sveučili&scaron;ta u Europi. U tom razdoblju, tek su se malobrojni laici bavili izučavanjem filozofije i znanosti. Stoga, njegova odluka da nakon &scaron;kolovanja u Istri napusti rodni zavičaj i nastavi daljnje usavr&scaron;avanje svojih znanja također je i pokazatelj kako je već &scaron;kolovanjem u benediktinskoj samostanskoj &scaron;koli u Istri dobio snažne poticaje i želju da produbi svoja znanja, kao i solidna temeljna znanja iz područja <em>trivija</em> (gramatika, retorika dijalektika) i <em>kvadrivija</em> (aritmetika, geometrija, astronomija, glazba), na kojima je dalje razvijao svoje intelektualne interese.</p>",
                id: 3
            }, {
                ime: "Crtež alegorijske slike Sunca iz djela arapskog učenjaka i astronoma Abu Ma'shara <em>Introductorium in astronomiam</em> (<em>Uvod u astronomiju</em>), kojega je Herman prvi preveo s arapskog na latinski jezik 1140.",
                opis: "<p>Abu Ma&rsquo;sharovo djelo <em>Introductorium in astronomiam</em>, bilo je najvažnije djelo koje je u arapskom svijetu do kraja prenosilo Aristotelovu prirodnu filozofiju, pa je upravo zato imalo golemo značenje za transmisiju te filozofije najprije u arapsku filozofiju i znanost, a preko Hermanova prijevoda i u zapadnu Europu.</p><p>Hermanov prijevod djela <em>Introductorium in astronomiam</em> zbog svoje važnosti za daljnji razvitak znanosti u Europi bio vi&scaron;e puta prepisivan tijekom 12., 13. i 14. stoljeća, a nakon izuma tiskarskog stroja u 15. stoljeću zbog njegove važnosti Hermanov prijevod otisnut je čak tri puta. Dva puta u Augsburgu 1489. i 1495., te u Veneciji 1506. godine. Do danas je sačuvano čak 11 prijepisa Hermanova prijevoda koji su pohranjeni u zbirkama i knjižnicama Oxforda, Pariza, Vatikana, Firence, Manchestera, Munchena, Napulja i drugih gradova.</p><p>Hermanov je prevoditeljski rad bio vođen njegovim intelektualnim interesima, kao i potrebama njegova vremena. Bio je dobar poznavatelj djela arapskih znanstvenika i filozofa: Ibn Bishr, Ibn Sina, Al-Kwarizmi, Ibn Rushd, Abu Ma&rsquo;shar i drugih. Prevodio je raznolika djela od arapskih sakralnih tekstova, astrolo&scaron;ko-astronomskih i matematičkih djela, kao i starogrčka matematička i astronomska djela, koja su se sačuvala u prijevodima na arapski jezik. Njegov interes u prvom redu je bio usmjeren na astrologiju, astronomiju, filozofiju, prirodnu filozofiju i matematiku &scaron;to se tematski uglavnom podudara s radom većine prevoditelja 12. stoljeća, koji su kao i Herman sudjelovali u početcima sustavnog prevođenja arapskih tekstova na latinski jezik.</p><p>Među suvremenicima Herman se isticao specifičnim stilom prevođenja i bio na glasu kao vrstan poznavatelj arapskog i latinskog jezika. Nije se u prevođenju služio dvjema tada uobičajenim metodama kod koje jedna osoba prevodi arapski izvornik na živi jezik (najče&scaron;će &scaron;panjolski), iz koje drugi prevoditelj stvara latinsku verziju, koju zatim u konačnici vrstan latinist stilski dorađuje i korigira. Svjedočanstvo o tome ostavio je Petar Venerabilis, koji 1144. pi&scaron;e svom prijatelju Bernardu iz Clairvauxa da je posao na prevođenju <em>Kur'ana</em> najprije povjerio obraćenom Židovu Petru iz Toleda, kojemu je pridružio svog osobnog tajnika Petra iz Poitiersa, ali rezultat mjihova zajedničkog rada nije bio zadovoljavajući, pa se odlučuje novcem skupo platiti stručnost Hermana Dalmatina i Roberta iz Kettona. Hermanova prevodilačka tehnika pretpostavlja izravni prijevod jedne te iste osobe. Kvalitetu njegova prijevoda na latinski jezik Abu Ma'sharova djela <em>Introductorium maius in astronomiam</em>, načinjenog s glosama potvrđuje jedanaest danas poznatih srednjovjekovnih kodeksa i uz to tiskana izdanja iz 1489. 1495. i 1506. godine.</p>",
                id: 4
            },
            {
                ime: "Hermanov prevoditeljski i znanstveni rad u centrima uz rijeku Ebro, tijekom razdoblja od 1138. do 1142. godine, kada je vrativši se s Bliskog istoka u Europu, priredio desetak prijevoda i kompilacija.",
                opis: "<p>Tijekom petogodi&scaron;njeg razdoblja od 1138. do 1142. godine, koje je nakon povratka s Bliskog istoka proveo na Iberskom poluotoku (&Scaron;panjolska), u području uz rijeku Ebro, Herman se zajedničkim izučavanjima i intenzivnim prevoditeljskim radom intenzivno povezao s Robertom iz Kettona. O suradnji i predanom radu svjedoči odlomak iz Hermanova djela <em>De essentiis</em> u kojem se sa zahvalno&scaron;ću obraća Robertu i podsjeća ga na duga i naporna zajednička izučavanja, koja su im otvarala riznice arapskog znanja nastalog na temeljima dvaju izvora: starogrčkih i istočnjačkih shvaćanja.</p><p>Ono &scaron;to su Herman i njegovi suvremenici u 12. stoljeću prevodili, prenosilo se i &scaron;irilo u &scaron;kolama zapadne Europe, te je utjecalo na razvoj i usmjerenje nastave i intelektualne djelatnosti na sveučili&scaron;tima zapadne Europe sve do konca srednjeg vijeka. Također, to je bio početak stvaranja nečeg kvalitativno novog, kao i dio priprema koje su vodile velikim konceptualnim promjenama u znanosti i filozofiji tijekom renesanse, kada se zasnivaju i oblikuju temelji novovjekovne nanosti i filozofije. Međutim, proces prijenosa, transformacije i prihvaćanja znanja i filozofskih pogleda mnogo je složeniji nego se to na prvi pogled čini. U tom procesu, pored utjecaja arapske i starogrčkih filozofija i znanosti prisutni su vidljivi utjecaji i različitih istočnjačkih znanja kao perzijskih, indijskih i kineskih, &scaron;to se odražava i u djelima koja je Herman prevodio i pisao, te ih tako posredovao latinsko-kr&scaron;ćanskom Zapadu.</p>",
                id: 5
            },
            {
                ime: "Hermanove veze s glasovitom prevoditeljskom školom u Toledu",
                opis: "<p><a target='_blank' href='https://sh.wikipedia.org/wiki/Rekonkista'>Rekonkvista</a>&nbsp;u&nbsp;&Scaron;panjolskoj&nbsp;nije spriječila učene&nbsp;kr&scaron;ćane,&nbsp;Maure (Arape)&nbsp;i Židove, da združenim snagama proučavaju dragocene rukopise maurskih biblioteka i prevode i stvaraju nova, izvorna djela. Njihovi napori rezultirali su nastajanjem kulturolo&scaron;kog fenomena poznatog pod nazivom <em>Toledska prevoditeljska &scaron;kola</em> (<em>Escuela de traductores de Toledo</em>), u kojoj su se okupljali učenjaci kako bi se bavili&nbsp;<a target='_blank' href='https://sh.wikipedia.org/wiki/Prevođenje'>prevođenjem</a>. Herman je tijekom boravka na Iberskom poluotoku održavao vezu s <em>Toledskom prevoditeljskom &scaron;kolom</em>, koju je utemeljio nadbiskup Raimundo. U toj &scaron;koli koja je djelovala kao prevoditeljski centar okupljali su se mnogi eruditi i prevoditelji toga doba. Pretpostavlja se da je Herman u kontaktima s <em>Toledskom &scaron;kolom</em> stekao nova znanja i upoznao neka njemu do tada nepoznata djela.</p><p><strong>&nbsp;</strong></p><p>U <em>Toledskoj &scaron;koli</em> poznavali su Hermanov prijevod &scaron;este knjige astronomije Sahl ibn Bishra 9.st, pod naslovom <strong><em>Fatidic</em></strong><strong><em>a (Proročica)</em> </strong>koji je načinio 1138. godine.</p><ul><li>Prvih pet knjiga Sahl ibn Bishra preveo je Juan iz Seville koji je djelovao u sklopu <em>Toledske &scaron;kole</em></li><li>U Hermanovom prijevodu <em>Fatidice </em>govori se o različitim promjenama u svijetu, u zraku, o nejednakostima među ljudima koje nastaju zbog neizbježnih različitosti utjecaja</li><li>Djelo sadrži rasprave o planetima, predviđanja iz njihovih retrogradnih gibanja i međusobnih položaja, te predviđanja izvedena iz gibanja kometa</li><li>Prijepisi Hermanova prijevoda djela <em>Fatidica</em> čuvaju se u Vatikanu, Cambridgeu, Oxfordu, Matzu</li><li>Hermanov prijevod tiskan je u Pragu 1592. godine</li><li>Hermanov prijevod <em>Fatidice </em>objavljen je u tekstu doktorske disetaciji Sheila Low-Beer, New York 1979.</li></ul>",
                id: 6
            },
            {
                ime: "Béziers, Francuska",
                opis: "<p>Herman 1143 seli u <strong>B&eacute;ziers</strong> gdje dovr&scaron;ava svoje jedino izvorno djelo <em>De essentiis (O esencijama)</em>.</p><ul><li>u njemu je izložio svoju prirodnu filozofiju i kozmologiju</li><li><strong>temelji se na aristotelizmu</strong> koji je upoznao iz Abu Ma&rsquo;sharova djela i na<strong> platonizmu</strong> koji je upoznao u Chartresu</li><li>te dvije filozofije <strong>dopunio je astrolo&scaron;kim koncepcijama</strong> koje je upoznao od Arapa.</li><li>djelo je imalo su važnu ulogu u razvoju znanosti</li><li>Hermanovo djelo <em>O esencijama</em> sačuvano je u 4 prijepisa koji se čuvaju u: Napulju, Londonu, Oxfordu i Epsomu</li><li>Djelo O esencijama tiskano je 3 puta; na latinskom (Santander 1946), latinski-engleski (Leiden-K&ouml;ln 1982), latinski-hrvatski ( Pula 1990).</li><li>Premda je Hermanovo djelo <em>O esencijama</em> različitih misaonih tradicija, objedinjenih u jedno koherentno tumačenje ustroja svijeta, dosada su u znatnoj mjeri u njemu istraženi elementi Aristotelove filozofije, posredovane arapskim autorima</li><li>Herman &scaron;kolovan u zapadnoeuropskoj tradiciji deklarira se sljedbenikom Platona</li><li>Hermanovi izvori Platonova učenja: &scaron;kolovanje u Chartresu, poznavanje <em>Timeja </em>u Kalcidijevu komentaru, čiji je utjecaj u <em>De essentiis</em> neosporan, te navodi Cicerona, Makrobija, Marcijana Capelle, Augustina i Boetia, uz arapske novoplatonističke izvore</li><li>Analiza djela <em>O esencijama</em> pokazuje da je ne samo u pojedinim stavovima, već i u cjelini u osnovi novoplatoničkog sadržaja, te se može smatrati <strong>pretečom renesansnog novoplatonizma</strong></li><li>Hermanovo djelo je primjer<strong> kontinuiteta</strong> srednjovjekovnog i renesansnog novoplatonizma</li></ul>",
                id: 7
            },
            {
                ime: "Astrolab",
                opis: "<p>Astrolab (<a target='_blank' href='http://hr.wikipedia.org/wiki/Latinski_jezik'>lat.</a> <em>astrolabium</em>) je povijesni astronomski instrument, kojeg su razvili arapski učenjaci i čije je uvođenje bilo značajno za daljnji razvoj teorijske i praktične astronomije u zapadnoj Europi. Koristio se za određivanje i predviđanje položaja planeta i zvijezda. Također, bio je glavni navigacijski instrument sve do otkrića sekstanta u 18. stoljeću. Pored toga koristi se i u astrolo&scaron;koj praksi.</p><p>Astrolab se koristio se za:</p><ul><li>određivanje i predviđanje položaj <a target='_blank' href='http://hr.wikipedia.org/wiki/Planet'>planeta</a> i <a target='_blank' href='http://hr.wikipedia.org/wiki/Zvijezde'>zvijezda</a>;</li><li>određivanje mjesnog vremena iz zadane <a target='_blank' href='http://hr.wikipedia.org/wiki/Zemljopisna_dužina'>zemljopisne dužine</a> i obrnuto;</li><li>za izradu <a target='_blank' href='http://hr.wikipedia.org/wiki/Horoskop'>horoskopa</a></li><li>danas se koriste efemeride</li></ul><p>Herman je imao prilike upoznati astrolab jo&scaron; tijekom &scaron;kolovanja u Chartresu. Za &scaron;irenje primjene astrolaba u Europi uvelike zaslužan je Hermanov prijevod Ptolemejeva djela <em>Planisfera</em> jer ono sadrži stereografske projekcije nebeske sfere na ravninu, pa je poslužilo kao teorijska podloga za konstrukciju astrolaba na latinskom zapadu tijekom srednjeg vijeka.</p><ul><li>Herman je u Toulouseu 1143. preveo Ptolemejevu</li><li>Hermanov prijevod Ptolemejeve <em>Planisfere </em>imao je posebno značenje jer je omogućio da se putem njega Zapadna Europa upozna s tim vrhunskim djelom kasne antike.</li><li>Za Hermanov se prijevod dugo vjerovalo da je jedini način na koji je sačuvano to Ptolemejevo djelo, da bi kasnije bio pronađen jedan arapski primjerak koji se čuva u Istambulu (Aja Sofija).</li><li>Sačuvano je ukupno 8 rukopisa Hermanova prijevoda Planisfere koji se čuvaju u Vatikanu, Parizu, Lyonu, Drezdenu, Oxfordu</li><li>Hermanov prijevod Planisfere tiskan je vi&scaron;e puta: Venecija 1507/8, N&uuml;rnberg 1531, Basel 1536, Venecija 1558.<ul><li>Načinjeno je i kritičko izdanje: Heiberg, Ptolemaie Opera Astronomica Minora, Leipzig 1907.</li><li>Također smatra se da je Herman napisao jedno djelo o astrolabu naslova<strong><em> De compositione et de usu astrolabi</em></strong> (čuva se u Sveučili&scaron;noj knjižnici u Louvainu)</li><li><em>De compositione et de usu astrolabi</em> je na popisu djela za koje nije definitivno dokazano da su Hermanovi tekstovi, a uz njega tu su jo&scaron; dva djela Ptolemeja <strong><em>Quadripartitum </em></strong>i<strong><em> Almagest (Syntaxis mathematica)</em></strong>, kao i prevedeni fragmenti <strong><em>Almagesta </em></strong>za koje se pretpostavlja da ih je Herman prevodio</li><li>Neki povjesničari znanosti smatraju da je Herman cjeloviti <em>Almagest</em> s grčkog jezika na latinski preveo na Siciliji oko 1160.</li></ul></li></ul>",
                id: 8
            },
            {
                ime: "Hermanov crtež uz izvod pomrčina Sunca i Mjeseca u djelu <em>De Essentiis</em> (Besiers, 1143), prijepis iz 14. stoljeća, London, British museum.",
                opis: "<p>Ovaj Hermanov matematički dokaz ima veliko značenje za prosudbu njegova matematičkog znanja</p><ul><li>Herman nije dovoljno temeljito savladao strogo logičko izvođenje dokaza, pa izvod sadrži propuste</li><li>U djelu Herman zastupa mi&scaron;ljenje da se različita nebeska tijela ne gibaju jednakom brzinom, te na temelju toga određuje udaljenost Mjeseca i Sunca od sredi&scaron;ta svijeta</li><li>Omjeri brzina koji slijede iz njegove metode navode ga na zaključak o brzinama tijela ovisno o njihovim udaljenostima od sredi&scaron;ta.</li><li>Herman se koristi planetnim sustavom Platonova učenika Heraklida iz Ponta (4. st. p. Krista), koji je uveo sustav po kojem se Merkur i Venera okreću oko Sunca i s njim zajedno oko Zemlje</li><li>Hermanovo djelo <em>O esencijama</em> uz izvorna promi&scaron;ljanja je i primjer kontinuiteta i transmisije antičkog znanja kroz srednji vijek</li><li>Iz Heraklidovog sustava, Kopernik je u 15. Stoljeću izveo heliocentrični sustav</li><li>Herman je bio vrlo blizu Platonovu shvaćanju matematike (osobito u razmatranju pojmova: vrijeme, prostor i beskonačno) matematika je prisutna u Hermanovu znanstvenom radu</li><li>Herman uočava da je matematika povezana sa zakonitostima prirode</li><li>postavljene astronomske teze poku&scaron;ava dokazati matematički</li><li>suprotno dotada&scaron;njoj matematičkoj tradiciji usvaja <strong>potrebu za matematičkim dokazivanjem</strong>, &scaron;to je metodička bit Euklidovih <em>Elemenata</em></li><li><strong>dokaz je primaran i to Herman prenosi u svoje glavno djelo</strong></li><li>premda nije dovoljno temeljito savladao strogo logičko izvođenje</li><li>srednjovjekovna tradicija, matematiku je razmatrala kroz interakciju s filozofijom</li><li>logičkoj strukturi matematike nije se pridavalo značenje</li><li><strong>Herman označava početak razdoblja primjene Euklidove metodike, &scaron;to će u renesansi otvoriti vrata novovjekovnoj znanosti</strong></li></ul>",
                id: 9
            },
            {
                ime: "Hermanov doprinos ranom upoznavanju Europe s islamom (na slici je prikazana Velika džamija u Córdobi)",
                opis: "<p>C&oacute;rdoba je bila centar maurske &Scaron;panjolske i razvijala se kao sjedi&scaron;te&nbsp;<a target='_blank' href='https://hr.wikipedia.org/wiki/Povijest_Pirenejskog_poluotoka#Prevlast_Arapa_(711.-1085.g.)'>C&oacute;rdobskog kalifata</a>&nbsp;(<a target='_blank' href='https://hr.wikipedia.org/wiki/756.'>756.</a> &ndash; <a target='_blank' href='https://hr.wikipedia.org/wiki/1035'>1035</a>.) te je postala uz Bagdad jednim od najvažnijih i najbogatijih sredi&scaron;ta&nbsp;<a target='_blank' href='https://hr.wikipedia.org/wiki/Islamska_umjetnost'>islamske kulture i umjetnosti</a>&nbsp;toga doba. O snazi i razvoju islamske civilizacije u južnoj Europi svjedoči činjenica da je oko 1000. godine C&oacute;rdoba bila jedan od najvećih gradova na svijetu s oko pola milijuna stanovnika. U gradu su, pored većinskog muslimanskog stanovni&scaron;tva, živjeli kr&scaron;ćani i Židovi, kao i u Sevilli i Toledu. U epohi kada Europa i sav kr&scaron;ćanski svijet strahuju od borbenog islama, javlja se sredinom 12. stoljeća, obilježenog ratovima kr&scaron;ćanskih i islamskih snaga, nekoliko učenih Europljana humanističkog opredjeljenja, koji vjerojatno potaknuti činjenicom da u tom razdoblju u nekim područjima Sredozemlja ipak koegzistiraju zajednice kr&scaron;ćana i muslimana, nastoje uspostaviti otvoren i miroljubiv dijalog. Promicatelj prvih izučavanja islama u Europi bio je Petar Venerabilis, deveti opat reformiranih benediktinaca s matičnom opatijom u Clunyju, koji je među uski krug svojih suradnika i prevoditelja uključio 1142. Hermana Dalmatina, cijeneći visoko njegovu svestranu naobrazbu, bogato znanje i prevoditeljske vje&scaron;tine. Glavne odrednice ovoga pothvata potaknutoga željom za boljim razumijevanjem islama, bile su utemeljene na snazi razuma, tolerancije i ljubavi. U želji da &scaron;to prije i uspje&scaron;nije uspostavi korpus tekstova o islamu prevedenih s arapskog na latinski jezik, kako bi zapadna Europa umjesto dotada&scaron;nje neupućenosti u muslimansku religiju temeljitije upoznala islamsko učenje izravno iz islamskih vjerskih tekstova, Petar Venerabilis putuje Iberskim poluotokom i okuplja grupu vrsnih suradnika s kojima će istražiti maurske knjiižnice u &Scaron;panjolskoj u potrazi za najprikladnijim djelima. Tako godine 1142. Petrus Venerabilis susreće uz rijeku Ebro Hermana Dalmatina i Roberta iz Kettona. Povjerava im posao prevođenja temeljnog teksta muslimanske religije <em>Kur'ana</em> i jo&scaron; nekih islamskih tekstova. Cilj je bio stvaranje prvog korpusa latinskih tekstova o islamu. Herman je uz suradnju na prijevodu <em>Kur'an,a </em>načinio i prijevod jo&scaron; dvaju islamskih vjerskih tekstova <em>De generatione Mahumet </em>(<em>O Muhamedovu rađanju</em>) i <em>Doctrina Mahumet</em> (<em>Muhamedov nauk</em>), te surađivao na sastavljanju teksta <em>Chronica Saracenorum </em>(<em>Saracenska kronika</em>), &scaron;to je imalo veliku važnost za upoznavanje kr&scaron;ćanske Europe sa islamom. Danas se rukopisi tih Hermanovih prijevoda islamskih tekstova čuvaju u bibliotekama u Parizu, Oxfordu, Vaticanu i Cambridgeu, a nakon izuma tiskarskog stroja tiskani su u Baselu 1550.</p>",
                id: 10
            },
            {
                ime: "Hermanov je načinio redakciju prvog prijevoda Euklidovih <em>Elemenata</em>, kapitalnog djela antičke matematike, koje je u integralnom obliku tijekom srednji vijek bilo zagubljeno i nepoznato u Europi. Na slici je stranica iz prvog tiskanog izdanja prijevoda s arapskog na latinski jezik iz 1482. godine.",
                opis: "<ul><li>Euklidovi <em>Elementi </em>(4. st. pr. n. e.) su temeljno djelo grčke matematike, koji je presudno utjecao na razvoj matematike u sljedećih 20. stoljeća</li><li>utemeljeno je na Aristotelovim stavovima o aksiomima, postulatima i definicijama</li><li>U djelu se daje prvi strogi aksiomatski matematički deduktivni sustav</li><li><em>Elementi</em> sadrže znanja iz starijih djela</li><li>obuhvaćaju elementarnu matematiku: aritmetiku (teoriju brojeva), sintetičku geometriju (točka, crta, ravnina, tijela) i algebru</li><li>u Euklidovu radu prevagnuo je utjecaj Aristotelova znanstvenog mi&scaron;ljenja u odnosu na Platona</li><li>za Euklida geometrija nije formalna logika, nego idealizirana slika svijeta stvarnosti</li><li>aksiomi, postulati i definicije sugerirani su osjetom, a geometrija ne gubi kontakt s prostornom intuicijom</li><li>Hermanov prijevod Euklidovih <em>Elementa</em> načinjen je prema prijevodu koji nema numeričke primjere, već je čista geometrijska verzija, u metodolo&scaron;kom pogledu bliža izvornom Euklidu</li><li>Prevođenje Euklidovih <em>Elementa</em> u 12. stoljeću značilo je i sasvim nov pristup matematici i nov pogled na matematičke probleme</li><li>Dotada se izvorna Euklidova djela nisu koristila, pa je i Herman &scaron;kolovan na tradiciji Boetijeve matematike (5. st), najutjecajnijeg matematičara srednjovjekovlja, koji se koristio samo Euklidovim iskazima, bez dokaznog postupka koji predstavlja metodolo&scaron;ku bit djela <em>Elementa</em></li><li>Hermanu koji se posebno zanimao za astronomiju i astrologiju, bili su potrebni Euklidovi<em> Elementi </em>za provođenje astronomskih dokaza</li><li>Hermanov prijevod rukopis zabilježen je u katalogu kancelara katedrale u Amiensu <em>Biblionomia</em> (1246.)</li></ul>",
                id: 11
            },
            {
                ime: "Karta Hermanova rodnog zavičaja – Istre",
                opis: "<p>Herman je pripadao hrvatskoj etničkoj skupini koja je u središnjoj Istri u 12. stoljeću bila najbrojnija. Pretpostavlja se kako je početno obrazovanje stekao najvjerojatnije u benediktinskom samostanu sv. Petra i Pavla u Šumi ili u nekom drugom benediktinskom samostanu smještenom na zapadnoj obali Istre u kojoj je živio i školovao se do oko dvadesete godine života. U to doba na Istarskom poluotoku djelovalo je nekoliko benediktinskih samostana od kojih su najpoznatiji: sv. Kasijana u Poreću (1030.), sv. Mihovila u Limskoj Drazi (oko 1040.), sv. Marije u Puli (prije 1001.), sv. Ivana u Medulinu (1015.) i sv. Petra i Pavla u Šumi (početkom 12. st). </p>",
                id: 12
            },
            {
                ime: "Bista Hermana Dalmatina, rad akademskog kipara Mladena Mikulina.",
                opis: "<p>Povodom 850. obljetnice Hermanova djela De essentiis, održan je 1. i 2. listopada 1993. znanstveni skup u Pazinu njemu u čast i tom je prigodom njegova bista, rad akademskog kipara Mladena Mikulina postavljena pred Klasičnom gimnazijom u Pazinu. Herman Dalmatin ili Herman Dalmatinac (lat. Hermannus Dalmata, Hermannus Sclavus, Hermannus Secundus, Hermannus de Carinthia) najstariji je hrvatski učenjak svjetskoga glasa i ujedno jedan od najvećih hrvatskih mislilaca, filozof i prevoditelj znanstvenih djel&acirc; s arapskoga na latinski jezik. Svojim je djelima, bogatim i raznovrsnim opusom i prijevodima s arapskog na latinski jezik doprinio razvitku zapadnoeuropske znanosti i filozofije. S petnaestak djela, kompilacija i prijevoda dao je znatan prinos razvoju prirodne filozofiije i egzaktnih znanosti u razdoblju koje je prethodilo pojavi prvih sveučili&scaron;ta u Europi. &Scaron;kolovanje koje je započeo u benediktinskoj samostanskoj &scaron;koli u rodnoj Istri, nastavio je kao dvadesetogodi&scaron;njak u glasovitim katedralnim &scaron;kolama u Chartresu i Parizu. Privučen arapskom znano&scaron;ću i filozofijom koje upravo u tom razdoblju doseže svoj vrhunac, i vođen intelektualnom radoznalo&scaron;ću i živim duhom odlazi s prijateljem Robertom iz Kettona (Chestera) na vi&scaron;egodi&scaron;nje studijsko-znanstveno putovanje zemljama i znanstveno-kulturnim centrima Bliskog istoka, &scaron;to će se presudno odraziti na njegov daljnji rad. Nakon povratka s Istoka putujući zemljama Mediterana, uz sjeverno Sredozemlje do obala &Scaron;panjolske nastanjuje se na Iberskom poluotoku. Tamo putuje i djeluje u različitim kulturnim i prevoditeljskim sredi&scaron;tima arapske &Scaron;panjolske, gdje se posvećuje intenzivnom i plodnom prevoditeljskom i spisateljskom radu. Nakon &scaron;to su Herman i Robert uz rijeku Ebro, susreli opata samostana u Clunyju Petra Časnog (Petrus Venerabilis), začetnika prvih istraživanja islama u zapadnoj Europi, pridružuju se uskom krugu njegovih suradnika i putuju u pratnji opata &Scaron;panjolskom. Herman istražuje bogate maurske biblioteke, kako bi odabrao najbolje predlo&scaron;ke za prevođenje. Odlazi na sjeverozapad u grad L&eacute;on, centar tada&scaron;nje kraljevine Castille, gdje uz bavljenje prevođenjem i znanstveni rad zasniva i vlastitu &scaron;kolu. Zatim putuje na jugu Francuske, prvo u Thulouse, a zatim u B&eacute;ziers, gdje 1143. godine dovr&scaron;ava svoja najznačajnija djela.</p><p>Herman je živio i djelovao na razmeđu različitih civilizacija, u kulturnim sredi&scaron;tima različitih tradicija, mi&scaron;ljenja i utjecaja. To ga je vjerojatno potaknulo da se na nagovor Petra Časnog pridruži Robertu iz Kettona i sudjeluje u prvom prijevodu Kur&rsquo;ana na latinski jezik. Herman je pored toga preveo i jo&scaron; dva utjecajna islamska vjerska djela De generatione Mahumet (O Muhamedovu rođenju) i Doctrina Mahumet (Muhamedov nauk), te je tako imao i važan udio u ranom upoznavanju zapadne Europe s islamom.</p>",
                id: 13
            },
            {
                ime: "Herman se posebno zanimao za arapsku astronomiju i astrologiju, na temelju kojih pi&scaron;e dvije astrolo&scaron;ke kompilacije: <em>Liber ibrium (Knjiga o oborinama</em>, 1140) i <em>De indagatione cordis (O istraživanju srca</em>, nakon 1140<em>.)</em>, kao kompilacije tekstova iz različitih izvora.",
                opis: "<ul><li>Arapi su od 8. do 12. stoljeća razvijali novu astrolo&scaron;ku teoriju</li><li>astrolo&scaron;ka shvaćanja dijelom su preuzeli od Indijaca</li><li>u arapskim djelima praktični i empirijski aspekti, spajaju se s starogrčkom astrologijom</li><li>Herman je 1140. načinio astrolo&scaron;ku kompilaciju, djelo naslova <em>Liber ibrium (Knjiga o oborinama)</em></li><li>kompilacija je arapskih i latinskih tekstova o predviđanju vremena i utjecaju zvijezda na život na zemlji.</li><li>djelo je sinteza istočnjačke i zapadnoeuropske znanosti, te predstavlja nagovje&scaron;taj kasnije sinteze tih dviju tradicija</li><li>rukopisi<em> Knjige o oborinama</em> su sačuvani u 16 primjeraka u bibliotekama u Vatikanu, Cambridgeu, Dijonu, Oxfordu, Parizu, Parmi, Pragu, Londonu, Erfutru<ul><li>Cjeloviti tekst <em>Knjige o oborinama</em> objavljen je u doktorskoj disertaciji: Sheila Low-Beer, New York 1979.</li></ul></li><li>Herman u svojoj drugoj kompilaciji naslova <strong><em>De indagatione cordis </em></strong>izlaže prerađene sažetke raznih prijevoda arapskih djela astrolo&scaron;kog značaja u kojima se raspravlja o judicejskoj ili divinatorskoj astrologiji</li><li>Knjiga obuhvaća tri cjeline: prva je o sudbinama prema Abu Ma&rsquo;sharu</li><li>druga je o planetima i znakovima zodijaka</li><li>treća o astrolo&scaron;kim problemima.</li><li>u tekstu se navode imena znanstvenika čijim se djelima Herman koristio: Ibn Bishr, Ibn Sina, Hermes, Abu Ma&rsquo;shar, i drugi</li><li>Primjerci rukopisa čuvaju se u Dijonu, Berlinu, Leningradu, Oxfordu i New Yorku</li><li><strong>Astrologija</strong> povijesno razvila se uz astronomiju, kada su ljudi, radi orijentacije u prostoru i vremenu, počeli promatrati zvjezdano nebo. Smatrajući Zemlju sredi&scaron;tem svijeta (geocentrični nazor) i otkriv&scaron;i da godi&scaron;nja doba i priroda ovise o položaju Sunca, a neke prirodne pojave i o Mjesečevim mijenama, zaključilo se da ta i ostala nebeska tijela moraju imati odsudan utjecaj i na sudbinu ljudi. Da bi otkrili &raquo;zakonitosti&laquo; koje povezuju ljudski život sa zvjezdanim kretanjima, astrolozi su stoljećima prikupljali podatke o putu planeta kroz zodijak i time znatno pridonijeli razvoju astronomije. &ndash; Iz Kaldeje, gdje se najprije razvila, astrologija se pro&scaron;irila na sve strane svijeta. U IV.&nbsp;st.&nbsp;pr.&nbsp;Kr. njome se bave grčki učenjaci u Aleksandriji; u Rimu je poznata kao &raquo;egipatska mudrost&laquo;; u srednjem vijeku osobito su je razvili Arapi. Mnogi vladari imali su svoje dvorske astrologe kojima su se obraćali radi savjeta u najvažnijim državnim odlukama. Jo&scaron; u XVI.&nbsp;st. bave se astrologijom gotovo svi astronomi i matematičari, pa i najpoznatiji, kao T. Brahe. Za pogađanje sudbine pojedinaca i zajednice, predviđanje budućih događaja itd. služio je obično &raquo;dobozor&laquo;&nbsp;<a target='_blank' href='https://www.enciklopedija.hr/natuknica.aspx?ID=26160'>horoskop</a>. &ndash; Iako je u astronomiji nakon Kopernika napu&scaron;ten geocentrični nazor, astrologija se ipak održala u mnogim dru&scaron;tvenim sredinama i u prilikama koje pogoduju praznovjerju. Astrologija od 17. stoljeća i utemeljenja novovjekovne znanosti gubi status znanosti i postaje sadržaj pučke literature. Astrologija i u 21. stoljeću privlači pažnju i prakticira se kao disciplina i pseudoznanost koja se bavi proricanjem sudbine pojedinog čovjeka ili ljudskih zajednica iz položaja planeta i zvijezda u određenom trenutku. Jo&scaron; i danas, kao izvor lake zarade na račun lakovjerne ili misticizmom zadojene publike, postoje u različitim zemljama astrolo&scaron;ki instituti za proricanje sudbine, astrolo&scaron;ka dru&scaron;tva, knjižnice, časopisi i novine.</li></ul>",
                id: 14
            },
            {
                ime: "Hermanovo školovanje na katedralnoj školi u Parizu",
                opis: "<p>Nakon &scaron;kolovanja u katedralnoj &scaron;koli u Chartresu (1130-1134), Herman 1135. nastavlja &scaron;kolovanje u Parizu. Herman se jo&scaron; tijekom &scaron;kolovanja u Chartresu zbližio i s Englezom Robertom iz Kettona, ponekada navođenim kao Robert iz Chestera. Dijelili su zajedničke interese i obojica su bili pod velikim utjecajem učenjaka i njihova profesora <strong>Thierryja iz Chartresa</strong> od kojeg su dobili ključna znanja iz područja filozofije, prirodne filozofije, astronomije, astrologije i matematike, koje će ih ne samo profilirati kao filozofe i znanstvenike, već i potaknuti na samostalni znanstveni, filozofski i prevoditeljski rad. Kada je Thierry 1135. godine postao kancelarom katedralne &scaron;kole u Parizu, njegovi učenici Herman i Robert također su slijedili svog učitelja u Pariz da bi tamo slu&scaron;ali njegova predavanja kod Malog mosta na obali Seine i u Parizu dovr&scaron;ili studij. Već u vrijeme kada je Thierry pre&scaron;ao na katedralnu &scaron;kolu u Parizu, ona je uživala znatan ugled koji će s vremenom jo&scaron; rasti i 1200. godine postati će jednim od prvih sveučili&scaron;ta u Europi. Prvih godina nakon Hermanova i Robertova zavr&scaron;etka studija u Parizu, o njima nema sačuvanih podataka. Može se pretpostaviti kako su pod utjecajem Thierrya jo&scaron; za vrijeme &scaron;kolovanja razvili sklonost izučavanju arapske znanosti i filozofije. Arapski su utjecaji bili prisutni u katedralnoj &scaron;koli, a prvi Adelardovi prijevodi s arapskog na latinski izvornih arapskih znanstvenih i filozofskih djela i zagubljenih grčkih djela već su bili poznati i &scaron;irili se prijepisima jo&scaron; u doba Hermanova i Robertova studija. Ta je duhovna klima i dostupnost prvih izvora islamske i arapske znanstvene tradicije neosporno potaknula Hermana i Roberta da nakon &scaron;to su u Parizu apsolvirali <em>artes liberales</em> napuste Europu i odluče se krenuti na dugo putovanje tragovima arapske filozofije i znanosti. Zadivljen mudro&scaron;ću magistra Thierryja, Herman iskreno&scaron;ću učenika priznaje kako je svog učitelja poku&scaron;ao nasljedovati u znanju zajedno sa svojim prijateljem Robertom od Kettona, s kojim će proputovati Mediteran i Bliski istok.</p><p>Na katedralnim &scaron;kolama u zapadnoj Europi, &scaron;kolovao se prema programu <strong><em>septem artes liberales,</em></strong> sastavljenom od dva dijela:</p><ul><li><strong><em>trivij</em></strong>: gramatika, dijalektika,retorika</li><li><strong><em>kvadrivij</em></strong>: aritmetika, geometrija, astronomija i glazba</li><li>Herman je u glasovitoj katedralnoj &scaron;koli u Parizu, kao i u Chartresu također slu&scaron;ao nastavu ustrojenu prema po shemi <strong><em>sedam slobodnih umijeća</em></strong> kao i u bilo kojoj drugoj benediktinskoj &scaron;koli, pa i u Istri ali sada na znatno vi&scaron;oj razini</li><li>Herman je osobito pod utjecajem Tierryja, poznatog po izučavanjima Platona, a osobito njegova djela <em>Timej</em>. U njemu Herman vidi drugog Platona i naziva ga <em>latini studii patrem </em>(ocem latinskih studija), te prvim i nenadma&scaron;nim sidrom druge filozofije, odnosno znanstvenih disciplina zastupljenih u <em>quadriviumu</em>, te brižnog učitelja u kojemu živi Platonova du&scaron;a koja je sa neba si&scaron;la zbog sreće (nas) smrtnika</li><li>Znanjima koja je poučavao, učitelj je bio predmetom nadahnuća mnogima. Tako jedan drugi nepoznati učenik u Thierryju vidi glavnog filozofa čitave Europe (<em>utpote totius Europae philosophorum precipuus</em>)</li><li>nastava na katedralnim &scaron;kolama zapadne Europe u 12.st bila je u potpunosti obilježena <strong>neoplatonizmom </strong>i prihvaćanjem arapskih znanja koja su postupno prodirala u Europu tijekom 10. i 11. stoljeća</li><li>podržavala su se i uvodila nova znanja koja su postupno prodirala iz arapske znanstvene tradicije: znanja o pozicijskom brojevnom sustavu, konstrukcija i upotreba astrolaba, te astrologija ( u čemu je vidljiv trag utjecaja Gerberta iz Riemsa, kasnije imenovanog za papu Silvestra II.)</li></ul>",
                id: 15
            },
            {
                ime: "Benediktinski samostan Sv. Petra i Pavla iz 12. stoljeća, u mjestu Sveti Petar u Šumi",
                opis: "<p>Premda je Herman svoje &scaron;kolovanje započeo u nekoj od benediktinskih &scaron;kola, koje su do 13. stoljeća bile glavna žari&scaron;ta intelektualnog rada i obrazovanja na ovim područjima, među sačuvanim Hermanovim spisima nema pisanoga traga koji bi potvrdio njegovu pripadnost benediktinskom redu. Benediktinci su odigrali značajnu ulogu na području Istre u procesu opismenjavanja i obrazovanja. U benediktinskim samostanskim &scaron;kolama u zapadnoj Europi, pa tako i u Istri nastava se odvijala prema jedinstvenom programu naziva <strong><em>septem artes liberales (sedam slobodnih umijeća),</em></strong> sastavljenom od dva dijela:</p><ul><li><strong><em>trivij</em></strong>: gramatika, dijalektika,retorika</li><li><strong><em>kvadrivij</em></strong>: aritmetika, geometrija, astronomija i glazba</li></ul><p>Herman je u benediktinskoj samostanskoj &scaron;koli koju je pohađao u rodnoj Istri morao prema &scaron;kolskom programu dobro savladati latinski jezik i usvojiti solidna temeljna znanja iz područja <em>trivija</em> i <em>kvadrivija</em>, kako bi kasnije mogao nastaviti &scaron;kolovanje i pohađati nastavu na čuvenoj katedralnoj &scaron;koli u Chartresu, jednoj od najprestižnijih katedralnih &scaron;kola u zapadnoj Europi toga vremena.</p>",
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