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
        opishr = "<p><strong>Herman Dalmatin</strong> (lat. Hermannus Dalmata, Hermannus Sclavus, Hermannus Secundus, Hermannus de Carinthia) rođen je u sredi&scaron;njoj Istri oko 1100. godine, najstariji je hrvatski učenjak svjetskoga glasa i ujedno jedan od najvećih hrvatskih mislilaca, filozof i prevoditelj znanstvenih djel&acirc; s arapskoga na latinski jezik. Iz njegovih prijevoda zapadna Europa upoznaje se s arapskom znano&scaron;ću i zagubljenim djelima&nbsp; Aristotela, Ptolemeja, Euklida i drugih. Pretpostavlja se kako je početno obrazovanje stekao najvjerojatnije u benediktinskom samostanu sv. Petra i Pavla u &Scaron;umi ili u nekom drugom benediktinskom samostanu smje&scaron;tenom na zapadnoj obali Istre u kojoj je živio i &scaron;kolovao se do oko dvadesete godine života.</p><p>Herman je pripadao hrvatskoj etničkoj skupini koja je u sredi&scaron;njoj Istri u 12. stoljeću bila najbrojnija. U srednjem vijeku nisu postojala prezimena u dana&scaron;njem smislu. Postojalo je vi&scaron;e Hermana koji su se bavili filozofijom i znano&scaron;ću (Herman Contractus iz 11.st., Herman Alemannus iz 13. st.). Pridjevcima se upućivalo na etničku pripadnost, rodni zavičaj ili neko osobno obilježje, pa tako hrvatskog učenjaka&nbsp; navode i kao <strong>Herman</strong> <strong>Sclavus. </strong>U raspravi <em>De essentiis</em> (<em>O esencijama</em>) on sam potpisuje se s <strong>Herman Secundus </strong>(u odnosu na starijeg Hermana Contractusa iz 11. stoljeća). Neki autori iz 20. st. navode ga kao <strong>Herman de Carinthia</strong>, budući je jedan dio Istre tog doba pripadao franačkoj vojvodini Koru&scaron;koj. U Hermanovo doba pojam Koru&scaron;ke i Dalmacije nije se mogao jasno teritorijalno razgraničiti. Pridjevak <strong>Dalmata</strong> uz Hermanovo ime upotrebio je opat iz Clunyja Petrus Venerabilis (Petar Časni), a označavo je Hermanovo podrijetlo u teritorijalnom smislu nekada&scaron;nje rimske provincije Dalmacije (teritorijalno bliske Hermanovu zavičaju)<br /> Pridjevak Dalmata koristio se uz Hermanovo ime i u tekstovima&nbsp; glasovite Toledske prevoditeljske &scaron;kole s kojom je bio povezan.</p>"
        opiseng = ""
        nazivhr = "Sv. Petar u Šumi, Istra, Hrvatska"
        naziveng = ""
    } else if (slika == '2.jpg') {
        opishr = "<p>- Herman se &scaron;kolovao u Istri, zatim u Chartesu i Parizu<br /> - Preko obala Jadrana, Drača i Carigrada, odlazi za Palestinu i putuje zemljama Bliskog istoka, gdje uči arapski i izučava arapsku znanost i filozofiju <br /> - Vrativ&scaron;i se uz obale Sredozemlja u Europu, bavio se prevoditeljskim i znanstvenim radom i boravio u centrima na području &Scaron;panjolske i Francuske</p><p>Herman Dalmatin je &scaron;kolovanje započeo u benediktinskoj samostanskoj &scaron;koli u rodnoj Istri, a nastavio je kao dvadesetogodi&scaron;njak u glasovitim katedralnim &scaron;kolama u Chartresu i Parizu. Privučen arapskom znano&scaron;ću i filozofijom koje upravo u tom razdoblju dosežu svoj vrhunac i vođen intelektualnom radoznalo&scaron;ću i živim duhom po zavr&scaron;etku studija zajedno s Robertom iz Kettona (Chestera) putuje obalom Jadrana i dalje preko Carigrada na vi&scaron;egodi&scaron;nje studijsko-znanstveno putovanje zemljama i znanstveno-kulturnim centrima Bliskog istoka (Damask, Bagdad, Alep, Edesa i dr.), &scaron;to će se presudno odraziti na njegov daljnji rad. Nakon povratka s Istoka putujući zemljama Mediterana, uz sjeverno Sredozemlje do obala &Scaron;panjolske nastanjuje se u &Scaron;panjolskoj na Iberskom poluotoku. Tamo putuje i djeluje u različitim kulturnim i prevoditeljskim sredi&scaron;tima arapske &Scaron;panjolske, gdje se posvećuje intenzivnom i plodnom prevoditeljskom i spisateljskom radu. Nakon &scaron;to su Herman i Robert uz rijeku Ebro, susreli opata samostana u Clunyju Petra Časnog (Petrus Venerabilis), začetnika prvih istraživanja islama u zapadnoj Europi, pridružuju se uskom krugu njegovih suradnika i putuju u pratnji opata &Scaron;panjolskom. Herman istražuje bogate maurske biblioteke, kako bi odabrao najbolje predlo&scaron;ke za prevođenje. Odlazi na sjeverozapad u grad L&eacute;on, centar tada&scaron;nje kraljevine Castille, gdje uz bavljenje prevođenjem i znanstveni rad zasniva i vlastitu &scaron;kolu. Zatim putuje na jugu Francuske, prvo u Thulouse, a zatim u B&eacute;ziers, gdje 1143. godine dovr&scaron;ava svoja najznačajnija djela. Nakon 1143. nema vi&scaron;e podataka o Hermanovu životu i radu.</p>"
        opiseng = ""
        nazivhr = "Karta Hermanovih putovanja"
        naziveng = ""
    } else if (slika == '3.jpg') {
        opishr = "<p>Nakon prva dva desetljeća života vezanog uz Istru i benediktinsku opatiju u kojoj se &scaron;kolovao, Herman Dalmatin od 1130. godine &scaron;kolovanje nastavlja u Chartresu, u jednoj od u to vrijeme najpoznatijih katedralnih &scaron;kola Francuske, gdje pohađa vi&scaron;i studij <em>artium</em>. &Scaron;kolu u Chartresu je koncem 10. stoljeća utemeljio biskup Chartresa Fulbert razvijajući profane discipline <em>trivium</em> i <em>quadrivium</em>. Vrsnim poučavanjem i razvojem različitih disciplina &scaron;kola u Chartresu u prvoj polovici 12. stoljeća doživljava procvat i svoje zlatno doba u razdoblju od 1100. do 1160. godine. U njoj su tada predavali mnogi glasoviti filozofi, teolozi i znanstvenici zbog kojih je &scaron;kola uživala izniman ugled. Zbog usmjerenja i visoke razine studija imala je važnu ulogu u 11. i 12. stoljeću, upravo u razdoblju kada dolazi do velikih promjena u znanstvenim i filozofskim shvaćanjima u zapadnoj Europi.</p><p>Herman je živio u razdoblju kada su postojale samo samostanske &scaron;kole i koje je prethodilo razvoju visoko&scaron;kolskih institucija i pojavi prvih sveučili&scaron;ta u Europi. U tom razdoblju, tek su se malobrojni laici bavili izučavanjem filozofije i znanosti. Stoga, njegova odluka da nakon &scaron;kolovanja u Istri napusti rodni zavičaj i nastavi daljnje usavr&scaron;avanje svojih znanja također je i pokazatelj kako je već &scaron;kolovanjem u benediktinskoj samostanskoj &scaron;koli u Istri dobio snažne poticaje i želju da produbi svoja znanja, kao i solidna temeljna znanja iz područja <em>trivija</em> (gramatika, retorika dijalektika) i <em>kvadrivija</em> (aritmetika, geometrija, astronomija, glazba),&nbsp; na kojima je dalje razvijao svoje intelektualne interese.</p>"
        opiseng = ""
        nazivhr = "Hermanovo usavršavanje u glasovitoj katedralnoj školi u Chartresu"
        naziveng = ""
    } else if (slika == '4.jpg') {
        opishr = "<p>Abu Ma&rsquo;sharovo djelo <em>Introductorium in astronomiam</em>, bilo je najvažnije djelo koje je u arapskom svijetu do kraja prenosilo Aristotelovu prirodnu filozofiju, pa je upravo zato imalo golemo značenje za transmisiju te filozofije najprije u arapsku filozofiju i znanost, a preko Hermanova prijevoda i u zapadnu Europu.</p><p>Hermanov prijevod djela <em>Introductorium in astronomiam</em> zbog svoje važnosti za daljnji razvitak znanosti u Europi bio je vi&scaron;e puta prepisivan tijekom 12., 13. i 14. stoljeća, a nakon izuma tiskarskog stroja u 15. stoljeću zbog njegove važnosti Hermanov prijevod otisnut je čak tri puta. Dva puta u Augsburgu 1489. i 1495., te u Veneciji 1506. godine. Do danas je sačuvano čak 11 prijepisa Hermanova prijevoda koji su pohranjeni u zbirkama i knjižnicama Oxforda, Pariza, Vatikana, Firence, Manchestera, M&uuml;nchena, Napulja i drugih gradova.</p><p>Hermanov je prevoditeljski rad bio vođen njegovim intelektualnim interesima, kao i potrebama njegova vremena. Bio je dobar poznavatelj djela arapskih znanstvenika i filozofa: Ibn Bishr, Ibn Sina, Al-Kwarizmi, Ibn Rushd, Abu Ma&rsquo;shar i drugih. Prevodio je raznolika djela od arapskih sakralnih tekstova, astrolo&scaron;ko-astronomskih i matematičkih djela, kao i starogrčka matematička i astronomska djela, koja su se sačuvala u prijevodima na arapski jezik. Njegov interes u prvom redu bio je usmjeren na astrologiju, astronomiju, filozofiju, prirodnu filozofiju i matematiku &scaron;to se tematski uglavnom podudara s radom većine prevoditelja 12. stoljeća, koji su kao i Herman sudjelovali u početcima sustavnog prevođenja arapskih tekstova na latinski jezik.</p><p>Među suvremenicima Herman se isticao specifičnim stilom prevođenja i bio je na glasu kao vrstan poznavatelj arapskog i latinskog jezika. Nije se u prevođenju služio dvjema tada uobičajenim metodama kod koje jedna osoba prevodi arapski izvornik na živi jezik (najče&scaron;će &scaron;panjolski), iz koje drugi prevoditelj stvara latinsku verziju, koju zatim u konačnici vrstan latinist stilski dorađuje i korigira. Svjedočanstvo o tome ostavio je Petar Venerabilis, koji 1144. godine pi&scaron;e svom prijatelju Bernardu iz Clairvauxa da je posao na prevođenju <em>Kur'ana</em> najprije povjerio obraćenom Židovu Petru iz Toleda, kojemu je pridružio svog osobnog tajnika Petra iz Poitiersa, ali rezultat mjihova zajedničkog rada nije bio zadovoljavajući, pa se odlučuje novcem skupo platiti stručnost Hermana Dalmatina i Roberta iz Kettona. Hermanova prevodilačka tehnika pretpostavlja izravni prijevod jedne te iste osobe. Kvalitetu njegova prijevoda na latinski jezik Abu Ma'sharova djela <em>Introductorium maius in astronomiam</em>, načinjenog s glosama potvrđuje jedanaest danas poznatih srednjovjekovnih kodeksa i uz to tiskana izdanja iz 1489., 1495. i 1506. godine.</p>"
        opiseng = ""
        nazivhr = "Crtež alegorijske slike Sunca iz djela arapskog učenjaka i astronoma Abu Ma'shara Introductorium in astronomiam (Uvod u astronomiju), kojega je Herman prvi preveo s arapskog na latinski jezik 1140."
        naziveng = ""
    } else if (slika == '5.jpg') {
        opishr = "<p>Tijekom petogodi&scaron;njeg razdoblja od 1138. do 1142. godine, koje je nakon povratka s Bliskog istoka proveo na Iberskom poluotoku (&Scaron;panjolska), u području uz rijeku Ebro, Herman se zajedničkim izučavanjima i intenzivnim prevoditeljskim radom intenzivno povezao s Robertom iz Kettona. O suradnji i predanom radu svjedoči odlomak iz Hermanova djela <em>De essentiis</em> u kojem se sa zahvalno&scaron;ću obraća Robertu i podsjeća ga na duga i naporna zajednička izučavanja, koja su im otvarala riznice arapskog znanja nastalog na temeljima dvaju izvora: starogrčkih i istočnjačkih shvaćanja.</p><p>Ono &scaron;to su Herman i njegovi suvremenici u 12. stoljeću prevodili, prenosilo se i &scaron;irilo u &scaron;kolama zapadne Europe, te je utjecalo na razvoj i usmjerenje nastave i intelektualne djelatnosti na sveučili&scaron;tima zapadne Europe sve do konca srednjeg vijeka. Također, to je bio početak stvaranja nečeg kvalitativno novog, kao i dio priprema koje su vodile velikim konceptualnim promjenama u znanosti i filozofiji tijekom renesanse, kada se zasnivaju i oblikuju temelji novovjekovne znanosti i filozofije. Međutim, proces prijenosa, transformacije i prihvaćanja znanja i filozofskih pogleda mnogo je složeniji nego se to na prvi pogled čini. U tom procesu, pored utjecaja arapske i starogrčkih filozofija i znanosti prisutni su vidljivi utjecaji i različitih istočnjačkih znanja kao perzijskih, indijskih i kineskih, &scaron;to se odražava i u djelima koja je Herman prevodio i pisao, te ih tako posredovao latinsko-kr&scaron;ćanskom Zapadu.</p>"
        opiseng = ""
        nazivhr = "Hermanov prevoditeljski i znanstveni rad u centrima uz rijeku Ebro, tijekom razdoblja od 1138. do 1142. godine, kada je vrativši se s Bliskog istoka u Europu, priredio desetak prijevoda i kompilacija."
        naziveng = ""
    } else if (slika == '6.jpg') {
        opishr = "<p>Rekonkvista&nbsp;u&nbsp;&Scaron;panjolskoj&nbsp;nije spriječila učene&nbsp;kr&scaron;ćane,&nbsp;Maure (Arape)&nbsp;i Židove, da združenim snagama proučavaju dragocene rukopise maurskih biblioteka i prevode i stvaraju nova, izvorna djela. Njihovi napori rezultirali su nastajanjem kulturolo&scaron;kog fenomena poznatog pod nazivom <em>Toledska prevoditeljska &scaron;kola</em> (<em>Escuela de traductores de Toledo</em>), u kojoj su se okupljali učenjaci kako bi se bavili&nbsp;prevođenjem. Herman je tijekom boravka na Iberskom poluotoku održavao vezu s <em>Toledskom prevoditeljskom &scaron;kolom</em>, koju je utemeljio nadbiskup Raimundo. U toj &scaron;koli koja je djelovala kao prevoditeljski centar okupljali su se mnogi eruditi i prevoditelji toga doba. Pretpostavlja se da je Herman u kontaktima s <em>Toledskom &scaron;kolom</em> stekao nova znanja i upoznao neka njemu do tada nepoznata djela.</p><p><strong>&nbsp;</strong></p><p>U <em>Toledskoj &scaron;koli</em> poznavali su Hermanov prijevod &scaron;este knjige astronomije Sahl ibn Bishra iz 9.st, pod naslovom <strong><em>Fatidic</em></strong><strong><em>a </em>(<em>Proročica</em>) </strong>koji je načinio 1138. godine.</p><ul><li>Prvih pet knjiga Sahl ibn Bishra preveo je Juan iz Seville koji je djelovao u sklopu <em>Toledske &scaron;kole</em></li><li>U Hermanovom prijevodu <em>Fatidice </em>govori se o različitim promjenama u svijetu, u zraku, o nejednakostima među ljudima koje nastaju zbog neizbježnih različitosti utjecaja</li><li>Djelo sadrži rasprave o planetima, predviđanja iz njihovih retrogradnih gibanja i međusobnih položaja te predviđanja izvedena iz gibanja kometa</li><li>Prijepisi Hermanova prijevoda djela <em>Fatidica</em> čuvaju se u Vatikanu, Cambridgeu, Oxfordu, Matzu</li><li>Hermanov prijevod tiskan je u Pragu 1592. godine</li><li>Hermanov prijevod <em>Fatidice </em>objavljen je u tekstu doktorske disetaciji Sheila Low-Beer, New York 1979.</li></ul>"
        opiseng = ""
        nazivhr = "Hermanove veze s glasovitom prevoditeljskom školom u Toledu"
        naziveng = ""
    } else if (slika == '7.jpg') {
        opishr = "<p>Herman se 1143. godine seli u <strong>B&eacute;ziers</strong> gdje dovr&scaron;ava svoje jedino izvorno djelo <em>De essentiis </em>(<em>O esencijama</em>).</p><ul><li>U njemu je izložio svoju prirodnu filozofiju i kozmologiju</li><li><strong>Temelji se na aristotelizmu</strong> koji je upoznao iz Abu Ma&rsquo;sharova djela i na<strong> platonizmu</strong> koji je upoznao u Chartresu</li><li>Te dvije filozofije <strong>dopunio je astrolo&scaron;kim koncepcijama</strong> koje je upoznao od Arapa.</li><li>Djelo je imalo važnu ulogu u razvoju znanosti</li><li>Hermanovo djelo <em>O esencijama</em> sačuvano je u 4 prijepisa koji se čuvaju u: Napulju, Londonu, Oxfordu i Epsomu</li><li>Djelo <em>O esencijama</em> tiskano je 3 puta; na latinskom (Santander 1946), latinski-engleski (Leiden-K&ouml;ln 1982), latinski-hrvatski ( Pula 1990).</li><li>Premda je Hermanovo djelo <em>O esencijama</em> različitih misaonih tradicija, objedinjenih u jedno koherentno tumačenje ustroja svijeta, dosada su u znatnoj mjeri u njemu istraženi elementi Aristotelove filozofije, posredovane arapskim autorima</li><li>Herman &scaron;kolovan u zapadnoeuropskoj tradiciji deklarira se sljedbenikom Platona</li><li>Hermanovi izvori Platonova učenja: &scaron;kolovanje u Chartresu, poznavanje <em>Timeja </em>u Kalcidijevu komentaru, čiji je utjecaj u <em>De essentiis</em> neosporan te navodi Cicerona, Makrobija, Marcijana Capelle, Augustina i Boetia, uz arapske novoplatonističke izvore</li><li>Analiza djela <em>O esencijama</em> pokazuje da je ne samo u pojedinim stavovima, već i u cjelini u osnovi novoplatoničkog sadržaja te se može smatrati <strong>pretečom renesansnog novoplatonizma</strong></li><li>Hermanovo djelo primjer je<strong> kontinuiteta</strong> srednjovjekovnog i renesansnog novoplatonizma</li></ul>"
        opiseng = ""
        nazivhr = "Béziers, Francuska"
        naziveng = ""
    } else if (slika == '8.jpg') {
        opishr = "<p>Astrolab (lat. <em>astrolabium</em>) povijesni je astronomski instrument, kojeg su razvili arapski učenjaci i čije je uvođenje bilo značajno za daljnji razvoj teorijske i praktične astronomije u zapadnoj Europi. Koristio se za određivanje i predviđanje položaja planeta i zvijezda. Također, bio je glavni navigacijski instrument sve do otkrića sekstanta u 18. stoljeću. Pored toga koristi se i u astrolo&scaron;koj praksi.</p><p>&nbsp;</p><p>Astrolab se koristio za:</p><ul><li>Određivanje i predviđanje položaj planeta i zvijezda</li><li>Određivanje mjesnog vremena iz zadane zemljopisne dužine i obrnuto</li><li>Za izradu horoskopa</li><li>Danas se koriste efemeride</li></ul><p>&nbsp;</p><p>Herman je imao prilike upoznati astrolab jo&scaron; tijekom &scaron;kolovanja u Chartresu. Za &scaron;irenje primjene astrolaba u Europi uvelike zaslužan je Hermanov prijevod Ptolemejeva djela <em>Planisfera</em> jer ono sadrži stereografske projekcije nebeske sfere na ravninu, pa je poslužilo kao teorijska podloga za konstrukciju astrolaba na latinskom zapadu tijekom srednjeg vijeka.</p><p>&nbsp;</p><ul><li>Herman je u Toulouseu 1143. preveo Ptolemejevu <em>Planisferu</em></li><li>Hermanov prijevod Ptolemejeve <em>Planisfere </em>imao je posebno značenje jer je omogućio da se putem njega zapadna Europa upozna s tim vrhunskim djelom kasne antike</li><li>Za Hermanov prijevod se dugo vjerovalo da je jedini način na koji je sačuvano to Ptolemejevo djelo, da bi kasnije bio pronađen jedan arapski primjerak koji se čuva u Istambulu (Aja Sofija)</li><li>Sačuvano je ukupno 8 rukopisa Hermanova prijevoda <em>Planisfere</em> koji se čuvaju u Vatikanu, Parizu, Lyonu, Drezdenu, Oxfordu</li><li>Hermanov prijevod <em>Planisfere</em> tiskan je vi&scaron;e puta: Venecija 1507/8, N&uuml;rnberg 1531, Basel 1536, Venecija 1558.<ul><li>Načinjeno je i kritičko izdanje: Heiberg, <em>Ptolemaie Opera Astronomica Minora</em>, Leipzig 1907.</li></ul></li></ul><p>&nbsp;</p><ul><li>Također smatra se da je Herman napisao jedno djelo o astrolabu naslova<strong><em> De compositione et de usu astrolabi</em></strong> (čuva se u Sveučili&scaron;noj knjižnici u Louvainu)</li><li><em>De compositione et de usu astrolabi</em> je na popisu djela za koje nije definitivno dokazano da su Hermanovi tekstovi, a uz njega tu su jo&scaron; dva djela Ptolemeja <strong><em>Quadripartitum </em></strong>i<strong><em> Almagest </em>(<em>Syntaxis mathematica</em>)</strong>, kao i prevedeni fragmenti <strong><em>Almagesta </em></strong>za koje se pretpostavlja da ih je Herman prevodio</li><li>Neki povjesničari znanosti smatraju da je Herman cjeloviti <em>Almagest</em> s grčkog jezika na latinski preveo na Siciliji oko 1160.</li></ul>"
        opiseng = ""
        nazivhr = "Astrolab"
        naziveng = ""
    } else if (slika == '9.jpg') {
        opishr = "<ul><li>Ovaj Hermanov matematički dokaz ima veliko značenje za prosudbu njegova matematičkog znanja</li><li>Herman nije dovoljno temeljito savladao strogo logičko izvođenje dokaza, pa izvod sadrži propuste</li><li>U djelu Herman zastupa mi&scaron;ljenje da se različita nebeska tijela ne gibaju jednakom brzinom, te na temelju toga određuje udaljenost Mjeseca i Sunca od sredi&scaron;ta svijeta</li><li>Omjeri brzina koji slijede iz njegove metode navode ga na zaključak o brzinama tijela ovisno o njihovim udaljenostima od sredi&scaron;ta.</li></ul><p>&nbsp;</p><ul><li>Herman se koristi planetnim sustavom Platonova učenika Heraklida iz Ponta (4. st. p. Krista), koji je uveo sustav po kojem se Merkur i Venera okreću oko Sunca i s njim zajedno oko Zemlje</li><li>Hermanovo djelo <em>O esencijama</em> uz izvorna promi&scaron;ljanja je i primjer kontinuiteta i transmisije antičkog znanja kroz srednji vijek</li><li>Iz Heraklidovog sustava, Kopernik je u 15. stoljeću izveo heliocentrični sustav</li><li>Herman je bio vrlo blizu Platonovu shvaćanju matematike (osobito u razmatranju pojmova: vrijeme, prostor i beskonačno) matematika je prisutna u Hermanovu znanstvenom radu</li><li>Herman uočava da je matematika povezana sa zakonitostima prirode</li><li>Postavljene astronomske teze poku&scaron;ava dokazati matematički</li><li>Suprotno dotada&scaron;njoj matematičkoj tradiciji usvaja <strong>potrebu za matematičkim dokazivanjem</strong>, &scaron;to je metodička bit Euklidovih <em>Elemenata</em></li><li><strong>Dokaz je primaran i to Herman prenosi u svoje glavno djelo</strong></li><li>Premda nije dovoljno temeljito savladao strogo logičko izvođenje</li><li>Srednjovjekovna tradicija, matematiku je razmatrala kroz interakciju s filozofijom</li><li>Logičkoj strukturi matematike nije se pridavalo značenje</li><li><strong>Herman označava početak razdoblja primjene Euklidove metodike, &scaron;to će u renesansi otvoriti vrata novovjekovnoj znanosti</strong></li></ul>"
        opiseng = ""
        nazivhr = "Hermanov crtež uz izvod pomrčina Sunca i Mjeseca u djelu <em>De essentiis </em>(Besiers, 1143), prijepis iz 14. stoljeća, London, British museum."
        naziveng = ""
    } else if (slika == '10.jpg') {
        opishr = "<p>C&oacute;rdoba je bila centar maurske &Scaron;panjolske i razvijala se kao sjedi&scaron;te&nbsp;C&oacute;rdobskog kalifata&nbsp;(756. &ndash; 1035.) te je postala uz Bagdad jednim od najvažnijih i najbogatijih sredi&scaron;ta&nbsp;islamske kulture i umjetnosti&nbsp;toga doba. O snazi i razvoju islamske civilizacije u južnoj Europi svjedoči činjenica da je oko 1000. godine C&oacute;rdoba bila jedan od najvećih gradova na svijetu s oko pola milijuna stanovnika. U gradu su, pored većinskog muslimanskog stanovni&scaron;tva, živjeli kr&scaron;ćani i Židovi, kao i u Sevilli i Toledu. U epohi kada Europa i sav kr&scaron;ćanski svijet strahuju od borbenog islama, javlja se sredinom 12. stoljeća, obilježenog ratovima kr&scaron;ćanskih i islamskih snaga, nekoliko učenih Europljana humanističkog opredjeljenja, koji vjerojatno potaknuti činjenicom da u tom razdoblju u nekim područjima Sredozemlja ipak koegzistiraju zajednice kr&scaron;ćana i muslimana, nastoje uspostaviti otvoren i miroljubiv dijalog. Promicatelj prvih izučavanja islama u Europi bio je Petar Venerabilis, deveti opat reformiranih benediktinaca s matičnom opatijom u Clunyju, koji je među uski krug svojih suradnika i prevoditelja uključio 1142. Hermana Dalmatina, cijeneći visoko njegovu svestranu naobrazbu, bogato znanje i prevoditeljske vje&scaron;tine. Glavne odrednice ovoga pothvata potaknutoga željom za boljim razumijevanjem islama, bile su utemeljene na snazi razuma, tolerancije i ljubavi. U želji da &scaron;to prije i uspje&scaron;nije uspostavi korpus tekstova o islamu prevedenih s arapskog na latinski jezik, kako bi zapadna Europa umjesto dotada&scaron;nje neupućenosti u muslimansku religiju temeljitije upoznala islamsko učenje izravno iz islamskih vjerskih tekstova, Petar Venerabilis putuje Iberskim poluotokom i okuplja grupu vrsnih suradnika s kojima će istražiti maurske knjiižnice u &Scaron;panjolskoj u potrazi za najprikladnijim djelima. Tako godine 1142. Petrus Venerabilis susreće uz rijeku Ebro Hermana Dalmatina i Roberta iz Kettona. Povjerava im posao prevođenja temeljnog teksta muslimanske religije <em>Kur'ana</em> i jo&scaron; nekih islamskih tekstova. Cilj je bio stvaranje prvog korpusa latinskih tekstova o islamu. Herman je uz suradnju na prijevodu <em>Kur'ana </em>načinio i prijevod jo&scaron; dvaju islamskih vjerskih tekstova <em>De generatione Mahumet </em>(<em>O Muhamedovu rađanju</em>) i <em>Doctrina Mahumet</em> (<em>Muhamedov nauk</em>) te surađivao na sastavljanju teksta <em>Chronica Saracenorum </em>(<em>Saracenska kronika</em>), &scaron;to je imalo veliku važnost za upoznavanje kr&scaron;ćanske Europe sa islamom. Danas se rukopisi tih Hermanovih prijevoda islamskih tekstova čuvaju u bibliotekama u Parizu, Oxfordu, Vaticanu i Cambridgeu, a nakon izuma tiskarskog stroja tiskani su u Baselu 1550. godine.</p>"
        opiseng = ""
        nazivhr = "Hermanov doprinos ranom upoznavanju Europe s islamom (na slici je prikazana Velika džamija u Córdobi)"
        naziveng = ""
    } else if (slika == '11.jpg') {
        opishr = "<ul><li>Euklidovi <em>Elementi </em>(4. st. pr. Kr.) temeljno su djelo grčke matematike, koji je presudno utjecao na razvoj matematike u sljedećih 20. stoljeća</li><li>Utemeljeno je na Aristotelovim stavovima o aksiomima, postulatima i definicijama</li><li>U djelu se daje prvi strogi aksiomatski matematički deduktivni sustav</li><li><em>Elementi</em> sadrže znanja iz starijih djela</li><li>Obuhvaćaju elementarnu matematiku: aritmetiku (teoriju brojeva), sintetičku geometriju (točka, crta, ravnina, tijela) i algebru</li><li>U Euklidovu radu prevagnuo je utjecaj Aristotelova znanstvenog mi&scaron;ljenja u odnosu na Platona</li><li>Za Euklida geometrija nije formalna logika, nego idealizirana slika svijeta stvarnosti</li><li>Aksiomi, postulati i definicije sugerirani su osjetom, a geometrija ne gubi kontakt s prostornom intuicijom</li></ul><p>&nbsp;</p><p>&nbsp;</p><ul><li>Hermanov prijevod Euklidovih <em>Elementa</em> načinjen je prema prijevodu koji nema numeričke primjere, već je čista geometrijska verzija, u metodolo&scaron;kom pogledu bliža izvornom Euklidu</li><li>Prevođenje Euklidovih <em>Elementa</em> u 12. stoljeću značilo je i sasvim nov pristup matematici i nov pogled na matematičke probleme</li><li>Dotada se izvorna Euklidova djela nisu koristila, pa je i Herman &scaron;kolovan na tradiciji Boetijeve matematike (5. st.), najutjecajnijeg matematičara srednjovjekovlja, koji se koristio samo Euklidovim iskazima, bez dokaznog postupka koji predstavlja metodolo&scaron;ku bit djela <em>Elementa</em></li><li>Hermanu koji se posebno zanimao za astronomiju i astrologiju, bili su potrebni Euklidovi<em> Elementi </em>za provođenje astronomskih dokaza</li><li>Hermanov prijevod rukopis zabilježen je u katalogu kancelara katedrale u Amiensu <em>Biblionomia</em> (1246.)</li></ul>"
        opiseng = ""
        nazivhr = "Hermanov je načinio redakciju prvog prijevoda Euklidovih <em>Elemenata,</em> kapitalnog djela antičke matematike<em>, </em>koje je<em> u integralnom obliku </em>tijekom srednji vijek bilo zagubljeno i nepoznato u Europi<em>. </em>Na slici je stranica iz prvog tiskanog izdanja prijevoda s arapskog na latinski jezik iz 1482<em>.</em> godine."
        naziveng = ""
    } else if (slika == '12.jpg') {
        opishr = "<p>Herman je pripadao hrvatskoj etničkoj skupini koja je u sredi&scaron;njoj Istri u 12. stoljeću bila najbrojnija. Pretpostavlja se kako je početno obrazovanje stekao najvjerojatnije u benediktinskom samostanu sv. Petra i Pavla u &Scaron;umi ili u nekom drugom benediktinskom samostanu smje&scaron;tenom na zapadnoj obali Istre u kojoj je živio i &scaron;kolovao se do oko dvadesete godine života. U to doba na Istarskom poluotoku djelovalo je nekoliko benediktinskih samostana od kojih su najpoznatiji: sv. Kasijana u Poreču (1030.), sv. Mihovila u Limskoj Drazi (oko 1040.), sv. Marije u Puli (prije 1001.), sv. Ivana u Medulinu (1015.) i sv. Petra i Pavla u &Scaron;umi (početkom 12. st).</p>"
        opiseng = ""
        nazivhr = "Karta Hermanova rodnog zavičaja – Istre"
        naziveng = ""
    } else if (slika == '13.jpg') {
        opishr = "<p>Povodom 850. obljetnice Hermanova djela <em>De essentiis</em>, održan je 1. i 2. listopada 1993. znanstveni skup u Pazinu njemu u čast i tom je prigodom njegova bista, rad akademskog kipara Mladena Mikulina, postavljena pred Klasičnom gimnazijom u Pazinu. Herman Dalmatin ili Herman Dalmatinac (lat. Hermannus Dalmata, Hermannus Sclavus, Hermannus Secundus, Hermannus de Carinthia) najstariji je hrvatski učenjak svjetskoga glasa i ujedno jedan od najvećih hrvatskih mislilaca, filozof i prevoditelj znanstvenih djel&acirc; s arapskoga na latinski jezik. Svojim je djelima, bogatim i raznovrsnim opusom i prijevodima s arapskog na latinski jezik doprinio razvitku zapadnoeuropske znanosti i filozofije. S petnaestak djela, kompilacija i prijevoda dao je znatan prinos razvoju prirodne filozofije i egzaktnih znanosti u razdoblju koje je prethodilo pojavi prvih sveučili&scaron;ta u Europi. &Scaron;kolovanje koje je započeo u benediktinskoj samostanskoj &scaron;koli u rodnoj Istri, nastavio je kao dvadesetogodi&scaron;njak u glasovitim katedralnim &scaron;kolama u Chartresu i Parizu. Privučen arapskom znano&scaron;ću i filozofijom koje upravo u tom razdoblju doseže svoj vrhunac, i vođen intelektualnom radoznalo&scaron;ću i živim duhom odlazi s prijateljem Robertom iz Kettona (Chestera) na vi&scaron;egodi&scaron;nje studijsko-znanstveno putovanje zemljama i znanstveno-kulturnim centrima Bliskog istoka, &scaron;to će se presudno odraziti na njegov daljnji rad. Nakon povratka s Istoka putujući zemljama Mediterana, uz sjeverno Sredozemlje do obala &Scaron;panjolske nastanjuje se na Iberskom poluotoku. Tamo putuje i djeluje u različitim kulturnim i prevoditeljskim sredi&scaron;tima arapske &Scaron;panjolske, gdje se posvećuje intenzivnom i plodnom prevoditeljskom i spisateljskom radu. Nakon &scaron;to su Herman i Robert uz rijeku Ebro, susreli opata samostana u Clunyju Petra Časnog (Petrus Venerabilis), začetnika prvih istraživanja islama u zapadnoj Europi, pridružuju se uskom krugu njegovih suradnika i putuju u pratnji opata &Scaron;panjolskom. Herman istražuje bogate maurske biblioteke, kako bi odabrao najbolje predlo&scaron;ke za prevođenje. Odlazi na sjeverozapad u grad L&eacute;on, centar tada&scaron;nje kraljevine Castille, gdje uz bavljenje prevođenjem i znanstveni rad zasniva i vlastitu &scaron;kolu. Zatim putuje na jugu Francuske, prvo u Toulouse, a zatim u B&eacute;ziers, gdje 1143. godine dovr&scaron;ava svoja najznačajnija djela.</p><p>Herman je živio i djelovao na razmeđu različitih civilizacija, u kulturnim sredi&scaron;tima različitih tradicija, mi&scaron;ljenja i utjecaja. To ga je vjerojatno potaknulo da se na nagovor Petra Časnog pridruži Robertu iz Kettona i sudjeluje u prvom prijevodu <em>Kur&rsquo;ana</em> na latinski jezik. Herman je pored toga preveo i jo&scaron; dva utjecajna islamska vjerska djela <em>De generatione Mahumet </em>(<em>O Muhamedovu rođenju</em>) i <em>Doctrina Mahumet </em>(<em>Muhamedov nauk</em>) te je tako imao i važan udio u ranom upoznavanju zapadne Europe s islamom.</p>"
        opiseng = ""
        nazivhr = "Bista Hermana Dalmatina, rad akademskog kipara Mladena Mikulina"
        naziveng = ""
    } else if (slika == '14.jpg') {
        opishr = "<ul><li>Arapi su od 8. do 12. stoljeća razvijali novu astrolo&scaron;ku teoriju</li><li>Astrolo&scaron;ka shvaćanja dijelom su preuzeli od Indijaca</li><li>U arapskim djelima praktični i empirijski aspekti, spajaju se s starogrčkom astrologijom</li><li>Herman je 1140. načinio astrolo&scaron;ku kompilaciju, djelo naslova <em>Liber ibrium </em>(<em>Knjiga o oborinama</em>)</li><li>Kompilacija je arapskih i latinskih tekstova o predviđanju vremena i utjecaju zvijezda na život na zemlji</li><li>Djelo je sinteza istočnjačke i zapadnoeuropske znanosti te predstavlja nagovje&scaron;taj kasnije sinteze tih dviju tradicija</li><li>Rukopisi<em> Knjige o oborinama</em> sačuvani su u 16 primjeraka u bibliotekama u Vatikanu, Cambridgeu, Dijonu, Oxfordu, Parizu, Parmi, Pragu, Londonu, Erfutru<ul><li>Cjeloviti tekst <em>Knjige o oborinama</em> objavljen je u doktorskoj disertaciji: Sheila Low-Beer, New York 1979.</li></ul></li></ul><p>&nbsp;</p><ul><li>Herman u svojoj drugoj kompilaciji naslova <em>De indagatione cordis </em>(<em>O istraživanju </em>srca) izlaže prerađene sažetke raznih prijevoda arapskih djela astrolo&scaron;kog značaja u kojima se raspravlja o judicejskoj ili divinatorskoj astrologiji</li><li>Knjiga obuhvaća tri cjeline: prva je o sudbinama prema Abu Ma&rsquo;sharu</li><li>Druga je o planetima i znakovima zodijaka</li><li>Treća o astrolo&scaron;kim problemima.</li><li>U tekstu se navode imena znanstvenika čijim se djelima Herman koristio: Ibn Bishr, Ibn Sina, Hermes, Abu Ma&rsquo;shar, i drugi</li><li>Primjerci rukopisa čuvaju se u Dijonu, Berlinu, Lenjingradu, Oxfordu i New Yorku</li></ul><p>&nbsp;</p><ul><li><strong>Astrologija</strong> se povijesno razvila uz astronomiju, kada su ljudi, radi orijentacije u prostoru i vremenu, počeli promatrati zvjezdano nebo. Smatrajući Zemlju sredi&scaron;tem svijeta (geocentrični nazor) i otkriv&scaron;i da godi&scaron;nja doba i priroda ovise o položaju Sunca, a neke prirodne pojave i o Mjesečevim mijenama, zaključilo se da ta i ostala nebeska tijela moraju imati odsudan utjecaj i na sudbinu ljudi. Da bi otkrili &raquo;zakonitosti&laquo; koje povezuju ljudski život sa zvjezdanim kretanjima, astrolozi su stoljećima prikupljali podatke o putu planeta kroz zodijak i time znatno pridonijeli razvoju astronomije. Iz Kaldeje, gdje se najprije razvila, astrologija se pro&scaron;irila na sve strane svijeta. U 4.&nbsp;st.&nbsp;pr.&nbsp;Kr. njome se bave grčki učenjaci u Aleksandriji; u Rimu je poznata kao &raquo;egipatska mudrost&laquo;; u srednjem vijeku osobito su je razvili Arapi. Mnogi vladari imali su svoje dvorske astrologe kojima su se obraćali radi savjeta u najvažnijim državnim odlukama. Jo&scaron; u 16.&nbsp;st. bave se astrologijom gotovo svi astronomi i matematičari, pa i najpoznatiji, kao T. Brahe. Za pogađanje sudbine pojedinaca i zajednice, predviđanje budućih događaja itd. služio je obično &raquo;dobozor&laquo;&nbsp;horoskop. &ndash; Iako je u astronomiji nakon Kopernika napu&scaron;ten geocentrični nazor, astrologija se ipak održala u mnogim dru&scaron;tvenim sredinama i u prilikama koje pogoduju praznovjerju. Astrologija od 17. stoljeća i utemeljenja novovjekovne znanosti gubi status znanosti i postaje sadržaj pučke literature. Astrologija i u 21. stoljeću privlači pažnju i prakticira se kao disciplina i pseudoznanost koja se bavi proricanjem sudbine pojedinog čovjeka ili ljudskih zajednica iz položaja planeta i zvijezda u određenom trenutku. Jo&scaron; i danas, kao izvor lake zarade na račun lakovjerne ili misticizmom zadojene publike, postoje u različitim zemljama astrolo&scaron;ki instituti za proricanje sudbine, astrolo&scaron;ka dru&scaron;tva, knjižnice, časopisi i novine.</li></ul>"
        opiseng = ""
        nazivhr = "Herman se posebno zanimao za arapsku astronomiju i astrologiju, na temelju kojih pi&scaron;e dvije astrolo&scaron;ke kompilacije: <em>Liber ibrium </em>(<em>Knjiga o oborinama</em>, 1140) i <em>De indagatione cordis </em>(<em>O istraživanju srca</em>, nakon 1140<em>.</em>), kao kompilacije tekstova iz različitih izvora"
        naziveng = ""
    } else if (slika == '15.jpg') {
        opishr = "<p>Nakon &scaron;kolovanja u katedralnoj &scaron;koli u Chartresu (1130. &ndash; 1134.), Herman 1135. godine nastavlja &scaron;kolovanje u Parizu. Herman se jo&scaron; tijekom &scaron;kolovanja u Chartresu zbližio i s Englezom Robertom iz Kettona, ponekada navođenim kao Robert iz Chestera. Dijelili su zajedničke interese i obojica su bili pod velikim utjecajem učenjaka i njihova profesora <strong>Thierryja iz Chartresa</strong> od kojeg su dobili ključna znanja iz područja filozofije, prirodne filozofije, astronomije, astrologije i matematike, koje će ih ne samo profilirati kao filozofe i znanstvenike, već i potaknuti na samostalni znanstveni, filozofski i prevoditeljski rad. Kada je Thierry 1135. godine postao kancelarom katedralne &scaron;kole u Parizu, njegovi učenici Herman i Robert također su slijedili svog učitelja u Pariz da bi tamo slu&scaron;ali njegova predavanja kod Malog mosta na obali Seine i u Parizu dovr&scaron;ili studij. Već u vrijeme kada je Thierry pre&scaron;ao na katedralnu &scaron;kolu u Parizu, ona je uživala znatan ugled koji će s vremenom jo&scaron; rasti i 1200. godine postati će jednim od prvih sveučili&scaron;ta u Europi. Prvih godina nakon Hermanova i Robertova zavr&scaron;etka studija u Parizu, o njima nema sačuvanih podataka. Može se pretpostaviti kako su pod utjecajem Thierrya jo&scaron; za vrijeme &scaron;kolovanja razvili sklonost izučavanju arapske znanosti i filozofije. Arapski su utjecaji bili prisutni u katedralnoj &scaron;koli, a prvi Adelardovi prijevodi s arapskog na latinski izvornih arapskih znanstvenih i filozofskih djela i zagubljenih grčkih djela već su bili poznati i &scaron;irili se prijepisima jo&scaron; u doba Hermanova i Robertova studija. Ta je duhovna klima i dostupnost prvih izvora islamske i arapske znanstvene tradicije neosporno potaknula Hermana i Roberta da nakon &scaron;to su u Parizu apsolvirali <em>artes liberales</em> napuste Europu i odluče se krenuti na dugo putovanje tragovima arapske filozofije i znanosti. Zadivljen mudro&scaron;ću magistra Thierryja, Herman iskreno&scaron;ću učenika priznaje kako je svog učitelja poku&scaron;ao nasljedovati u znanju zajedno sa svojim prijateljem Robertom od Kettona, s kojim će proputovati Mediteran i Bliski istok.</p><p>&nbsp;</p><p>Na katedralnim &scaron;kolama u zapadnoj Europi, &scaron;kolovao se prema programu <strong><em>septem artes liberales</em></strong>, sastavljenom od dva dijela:</p><ul><li><strong><em>Trivij</em></strong>: gramatika, dijalektika, retorika</li><li><strong><em>Kvadrivij</em></strong>: aritmetika, geometrija, astronomija i glazba</li><li>Herman je u glasovitoj katedralnoj &scaron;koli u Parizu, kao i u Chartresu također slu&scaron;ao nastavu ustrojenu prema po shemi <strong><em>sedam slobodnih umijeća</em></strong> kao i u bilo kojoj drugoj benediktinskoj &scaron;koli, pa i u Istri ali sada na znatno vi&scaron;oj razini</li><li>Herman je osobito pod utjecajem Tierryja, poznatog po izučavanjima Platona, a osobito njegova djela <em>Timej</em>. U njemu Herman vidi drugog Platona i naziva ga <em>latini studii patrem </em>(ocem latinskih studija) te prvim i nenadma&scaron;nim sidrom druge filozofije, odnosno znanstvenih disciplina zastupljenih u <em>quadriviumu</em> te brižnog učitelja u kojemu živi Platonova du&scaron;a koja je sa neba si&scaron;la zbog sreće (nas) smrtnika</li><li>Znanjima koja je poučavao, učitelj je bio predmetom nadahnuća mnogima Tako jedan drugi nepoznati učenik u Thierryju vidi glavnog filozofa čitave Europe (<em>utpote totius Europae philosophorum precipuus</em>)</li><li>Nastava na katedralnim &scaron;kolama zapadne Europe u 12. st. bila je u potpunosti obilježena <strong>neoplatonizmom </strong>i prihvaćanjem arapskih znanja koja su postupno prodirala u Europu tijekom 10. i 11. stoljeća</li></ul><p>Podržavala su se i uvodila nova znanja koja su postupno prodirala iz arapske znanstvene tradicije: znanja o pozicijskom brojevnom sustavu, konstrukcija i upotreba astrolaba te astrologija (u čemu je vidljiv trag utjecaja Gerberta iz Riemsa, kasnije imenovanog za papu Silvestra II.)</p>"
        opiseng = ""
        nazivhr = "Hermanovo školovanje na katedralnoj školi u Parizu"
        naziveng = ""
    } else if (slika == '16.jpg') {
        opishr = "<p>Premda je Herman svoje &scaron;kolovanje započeo u nekoj od benediktinskih &scaron;kola, koje su do 13. stoljeća bile glavna žari&scaron;ta intelektualnog rada i obrazovanja na ovim područjima, među sačuvanim Hermanovim spisima nema pisanoga traga koji bi potvrdio njegovu pripadnost benediktinskom redu. Benediktinci su odigrali značajnu ulogu na području Istre u procesu opismenjavanja i obrazovanja. U benediktinskim samostanskim &scaron;kolama u zapadnoj Europi, pa tako i u Istri nastava se odvijala prema jedinstvenom programu naziva <strong><em>septem artes liberales </em>(<em>sedam slobodnih umijeća</em>)<em>,</em></strong> sastavljenom od dva dijela:</p><ul><li><strong><em>trivij</em></strong>: gramatika, dijalektika, retorika</li><li><strong><em>kvadrivij</em></strong>: aritmetika, geometrija, astronomija i glazba</li></ul><p>&nbsp;</p><p>Herman je u benediktinskoj samostanskoj &scaron;koli koju je pohađao u rodnoj Istri morao prema &scaron;kolskom programu dobro savladati latinski jezik i usvojiti solidna temeljna znanja iz područja <em>trivija</em> i <em>kvadrivija</em>, kako bi kasnije mogao nastaviti &scaron;kolovanje i pohađati nastavu na čuvenoj katedralnoj &scaron;koli u Chartresu, jednoj od najprestižnijih katedralnih &scaron;kola u zapadnoj Europi toga vremena.</p>"
        opiseng = ""
        nazivhr = "Benediktinski samostan Sv. Petra i Pavla iz 12. stoljeća, u mjestu Sveti Petar u Šumi"
        naziveng = ""
    } else if (slika == '17.jpg') {
        opishr = "<p>Premda je Herman svoje &scaron;kolovanje započeo u nekoj od benediktinskih &scaron;kola, koje su do 13. stoljeća bile glavna žari&scaron;ta intelektualnog rada i obrazovanja na ovim područjima, među sačuvanim Hermanovim spisima nema pisanoga traga koji bi potvrdio njegovu pripadnost benediktinskom redu. Benediktinci su odigrali značajnu ulogu na području Istre u procesu opismenjavanja i obrazovanja. U benediktinskim samostanskim &scaron;kolama u zapadnoj Europi, pa tako i u Istri nastava se odvijala prema jedinstvenom programu naziva <strong><em>septem artes liberales </em>(<em>sedam slobodnih umijeća</em>)<em>,</em></strong> sastavljenom od dva dijela:</p><ul><li><strong><em>trivij</em></strong>: gramatika, dijalektika, retorika</li><li><strong><em>kvadrivij</em></strong>: aritmetika, geometrija, astronomija i glazba</li></ul><p>&nbsp;</p><p>Herman je u benediktinskoj samostanskoj &scaron;koli koju je pohađao u rodnoj Istri morao prema &scaron;kolskom programu dobro savladati latinski jezik i usvojiti solidna temeljna znanja iz područja <em>trivija</em> i <em>kvadrivija</em>, kako bi kasnije mogao nastaviti &scaron;kolovanje i pohađati nastavu na čuvenoj katedralnoj &scaron;koli u Chartresu, jednoj od najprestižnijih katedralnih &scaron;kola u zapadnoj Europi toga vremena.</p><p>&nbsp;</p><p><strong>Natpis na Ba&scaron;ćanskoj ploči</strong></p><p>&nbsp;</p><p><strong>Transkripcija teksta Ba&scaron;ćanske ploče na latinici:</strong></p><p>&nbsp;</p><p>Az, v ime Otca i Sina i Svetago Duha. Az opat Držiha pisah se o ledine, juže da Zvanimir kralj hrvatskij v dni svoje v Svetuju Luciju &ndash; i svedomi: župan Desimira Krbave, Mratin v Lice, Pribineža posal Vinodole, Jakov v otoce. Da iže to poreče, klni j Bog i dvanadeste apostola i četiri evanjelisti i svetaja Lucija, amen. Da iže sde živet, moli za nje Boga.</p><p>Az opat Dobrovit zdah crekav siju i svojeju bratiju s devetiju v dni kneza Kosmata obladajućago vsu Krajinu. I be&scaron;e v ti dni Mikula v Otočci s svetuju Luciju v jedino.</p><p>&nbsp;</p><p><strong>Tekst pretočen u suvremeni hrvatski književni jezik:</strong></p><p>&nbsp;</p><p>Ja, u ime Oca i Sina i Svetoga Duha, ja opat Držiha pisah ovo o ledini koju dade Zvonimir, kralj hrvatski, u svoje dane Svetoj Luciji, i svjedoci: Desimira, župan u Krbavi, Mratin u Lici, Pribineža, posal u Vinodolu, Jakov na otoku. Da tko to poreče, neka ga prokune Bog i 12 apostola i 4 evanđelista i sveta Lucija, amen. Da tko ovdje živi, moli za njih Boga.</p><p>&nbsp;Ja opat Dobrovit zidah crkvu ovu s moje braće devetoro u dane kneza Kosmata koji je vladao svom Krajinom. I bje&scaron;e u te dane Mikula u Otočcu sa Svetom Lucijom zajedno.</p><p>&nbsp;</p><p>Kad se uvidjelo da Sveta Lucija vi&scaron;e nije povoljno mjesto za čuvanje Ploče i da je treba spasiti od propadanja, očuvati je za &bdquo;najdalja pokoljenja&ldquo;, jer &bdquo;pripada svima nama&ldquo;, odlučeno je da se iz Jurandvora prenese u Jugoslavensku akademiju znanosti i umjetnosti u Zagrebu, da se očisti, uredi i na počasno mjesto postavi u palači Akademije. U ime Akademije Ploču je preuzeo u Krku pred zoru 30. kolovoza 1934. jezikoslovac Stjepan Iv&scaron;ić, a u ime Konservatorskoga ureda liturgičar i povjesničar umjetnosti Dragutin Kniewald. U Zagreb je stigla 31. kolovoza teretnim autom sa Su&scaron;aka. Iv&scaron;ić je nadahnuto opisao prijenos Ploče i nazvao je &bdquo;zlatnom pločom&ldquo; hrvatskoga jezika, na&scaron;im &bdquo;dragim kamenom&ldquo;, &bdquo;dragim kamikom&ldquo; koji će Hrvati čuvati &bdquo;dok bude koljena Hrvata&ldquo;. U Akademiju će &bdquo;dolaziti mnogi poklonici na&scaron;ih narodnih svetinja&ldquo;; pred njom će osjećaj pijeteta &bdquo;obuzimati svako pravo na&scaron;e srce&ldquo;.</p><p>O Ba&scaron;ćanskoj ploči postoji opsežna literatura. Prvi je na nju upozorio 1851. godine bogoslov Petar Dorčić, (kasnije župnik) u Ba&scaron;ki. Od tada su je čitali i proučavali mnogi: Ivan Kukuljević Sakcinski, Franjo Rački, Ivan Črnčić, Vatroslav Jagić, Rudolf Strohal, Josip Hamm, Vjekoslav &Scaron;tefanić, Eduard Hercigonja, Mateo Žagar, Lujo Margetić i drugi, ponajvi&scaron;e Branko Fučić. Čitanje natpisa odgonetavalo se postupno jer je tekst na vi&scaron;e mjesta nečitljiv. Najpotpunijim se smatra čitanje Branka Fučića. On se služio rezultatima prethodnika i suvremenika i nadgradio ih vlastitim ispravcima i tumačenjima. Njegovo čitanje prenosimo.</p><p>Ba&scaron;ćanska je ploča nadahnula skladatelje i pjesnike: K. Fribeca (kantata za sola, zbor i komorni orkestar, 1977.); S. &Scaron;uleka (skladba za zbor a capella, 1980.) i Lj. Kuntarića. O Ba&scaron;ćanskoj ploči pjesme su napisali: Vladimir Nazor, Silvije Strahimir Kranjčević i Josip Pupačić.</p>"
        opiseng = ""
        nazivhr = "Bašćanska ploča"
        naziveng = ""
    } else if (slika == '18.jpg') {
        opishr = "<p>Astrologija je osobito zanimala Hermana Dalmatina, a kao disciplina nastala je znatno prije njegova doba, jo&scaron; u drevnim civilizacijama i povijesno se razvijala uz astronomiju, kada su ljudi, radi orijentacije u prostoru i vremenu, počeli promatrati zvjezdano nebo. Sve do 17. stoljeća imala je status znanosti i njome su se bavili i najugledniji europski astronomi, kao Tycho Brahe i Johannes Kepler koji su obna&scaron;ali dužnosti astrologa na dvoru njemačko-rimskog cara i kralja Rudolfa II. u Pragu.</p><p>Drevni astrolozi smatrajući Zemlju sredi&scaron;tem svijeta (geocentrični ustroj svemira) i otkriv&scaron;i da godi&scaron;nja doba, neke prirodne pojave i priroda ovise o položaju Sunca, i o Mjesečevim mijenama, zaključilo se da ta i ostala nebeska tijela moraju imati odsudan utjecaj i na sudbinu ljudi. Da bi otkrili &raquo;zakonitosti&laquo; koje povezuju ljudski život sa zvjezdanim kretanjima, astrolozi su stoljećima prikupljali podatke o putu planeta kroz zodijak i time znatno pridonijeli razvoju astronomije. &ndash; Iz Kaldeje, gdje se najprije razvila, astrologija se pro&scaron;irila na sve strane svijeta. U IV.&nbsp;st.&nbsp;pr.&nbsp;Kr. njome se bave grčki učenjaci u Aleksandriji; u Rimu je poznata kao &raquo;egipatska mudrost&laquo;; u srednjem vijeku osobito su je razvili Arapi. Mnogi vladari imali su svoje dvorske astrologe kojima su se obraćali radi savjeta u najvažnijim državnim odlukama. Jo&scaron; u XVI.&nbsp;st. bave se astrologijom gotovo svi astronomi i matematičari, pa i najpoznatiji, kao T. Brahe. Za pogađanje sudbine pojedinaca i zajednice, predviđanje budućih događaja itd. služio je obično &raquo;dobozor&laquo;&nbsp;horoskop. &ndash; Iako je u astronomiji nakon Kopernika napu&scaron;ten geocentrični nazor, astrologija se ipak održala u mnogim dru&scaron;tvenim sredinama i u prilikama koje pogoduju praznovjerju. Astrologija od 17. stoljeća i utemeljenja novovjekovne znanosti gubi status znanosti i postaje sadržaj pučke literature. Astrologija i u 21. stoljeću privlači pažnju i prakticira se kao disciplina i pseudoznanost koja se bavi proricanjem sudbine pojedinog čovjeka ili ljudskih zajednica iz položaja planeta i zvijezda u određenom trenutku. Jo&scaron; i danas, kao izvor lake zarade na račun lakovjerne ili misticizmom privučene publike, postoje u različitim zemljama astrolo&scaron;ki instituti za proricanje sudbine, astrolo&scaron;ka dru&scaron;tva, knjižnice, časopisi i novine koji objavljuju horoskope i astrolo&scaron;ke katre.</p><p><strong>Astrolo&scaron;ka karta</strong> (horoskop) izrađuje se prema točno određenom vremenu i zemljopisnom položaju, a tumačenje se bazira na sintezi četiri osnovna elementa:</p><ul><li><strong>planeta</strong>&ndash; sustav od deset nebeskih tijela: dva Svjetla (Sunce i Mjesec) i osam planeta (Merkur, Venera, Mars, Jupiter, Saturn, Uran, Neptun, Pluton).</li><li><strong>znakova Zodijaka</strong>- dvanaest znakova:&nbsp;Ovan,&nbsp;Bik,&nbsp;Blizanci,&nbsp;Rak,&nbsp;Lav,&nbsp;Djevica,&nbsp;Vaga,&nbsp;&Scaron;korpion,&nbsp;Strijelac,&nbsp;Jarac,&nbsp;Vodenjak, Ribe.</li><li><strong>astrolo&scaron;kih kuća</strong>- dvanaest kuća koje predstavljaju različita područja života.</li><li><strong>aspekata</strong>- kutna udaljenost između planeta.</li></ul>"
        opiseng = ""
        nazivhr = "Astronomski sat, Prag"
        naziveng = ""
    } else if (slika == '19.jpg') {
        opishr = "<p>Herman je bio privučen arapskom znanošću i filozofijom koje tijekom 12 stoljeća dosežu svoj vrhunac. Stoga, vođen intelektualnom radoznalošću i živim duhom po završetku studija zajedno s Robertom iz Kettona (Chestera) odlazi na studijsko putovanje zemljama Bliskog istoka. Slijede puteve koje su prema Svetoj zemlji utrli križari tijekom Prvog križarskog rata i iz Pariza odlazi prema jugu, zatim putuje obalom Jadrana i dalje preko Carigrada na višegodišnje putovanje zemljama i znanstveno-kulturnim centrima Bliskog istoka (Damask, Bagdad, Alep, Edesa i dr.), što će se presudno odraziti na njegov daljnji rad.</p>"
        opiseng = ""
        nazivhr = "Bagdad - Hermanovo putovanje na Bliski istok"
        naziveng = ""
    } else if (slika == '20.jpg') {
        opishr = "<p>Herman se posebno zanimao za arapsku astronomiju i astrologiju, na temelju kojih je napisao dvije astrolo&scaron;ke kompilacije: <em>Liber ibrium (Knjiga o oborinama</em>, 1140) i <em>De indagatione cordis (O istraživanju srca</em>, nakon 1140<em>.)</em>, kao kompilacije tekstova iz različitih izvora.</p><ul><li>Arapi su od 8. do 12. stoljeća razvijali novu astrolo&scaron;ku teoriju</li><li>astrolo&scaron;ka shvaćanja dijelom su preuzeli od Indijaca</li><li>u arapskim djelima praktični i empirijski aspekti, spajaju se s starogrčkom astrologijom</li><li>Herman je prvo 1140. načinio astrolo&scaron;ko djelo, kompilaciju naslova <em>Liber ibrium (Knjiga o oborinama)</em></li><li>kompilacija je arapskih i latinskih tekstova o predviđanju vremena i utjecaju zvijezda na život na zemlji.</li><li>djelo je sinteza istočnjačke i zapadnoeuropske znanosti, te predstavlja nagovje&scaron;taj kasnije sinteze tih dviju tradicija</li><li>rukopisi<em> Knjige o oborinama</em> su sačuvani u 16 primjeraka u bibliotekama u Vatikanu, Cambridgeu, Dijonu, Oxfordu, Parizu, Parmi, Pragu, Londonu, Erfutru<ul><li>Cjeloviti tekst <em>Knjige o oborinama</em> objavljen je u doktorskoj disertaciji: Sheila Low-Beer, New York 1979.</li></ul></li></ul><p>&nbsp;</p><ul><li>Herman u svojoj drugoj kompilaciji naslova <strong><em>De indagatione cordis </em></strong>izlaže prerađene sažetke raznih prijevoda arapskih djela astrolo&scaron;kog značaja u kojima se raspravlja o judicejskoj ili divinatorskoj astrologiji</li><li>Knjiga obuhvaća tri cjeline: prva je o sudbinama prema Abu Ma&rsquo;sharu</li><li>druga je o planetima i znakovima zodijaka</li><li>treća o astrolo&scaron;kim problemima.</li><li>u tekstu se navode imena znanstvenika čijim se djelima Herman koristio: Ibn Bishr, Ibn Sina, Hermes, Abu Ma&rsquo;shar, i drugi</li><li>Primjerci rukopisa čuvaju se u Dijonu, Berlinu, Leningradu, Oxfordu i New Yorku</li></ul>"
        opiseng = ""
        nazivhr = "Astrološki interesi Hermana Dalmatina"
        naziveng = ""
    } else if (slika == '21.jpg') {
        opishr = "<p>Nakon prva dva desetljeća života vezanog uz Istru i benediktinsku opatiju u kojoj se &scaron;kolovao, Herman Dalmatin od 1130. godine &scaron;kolovanje nastavlja u Chartresu, u jednoj od u to vrijeme najpoznatijih katedralnih &scaron;kola Francuske, gdje pohađa vi&scaron;i studij <em>artium</em>. &Scaron;kolu u Chartresu je koncem 10. stoljeća utemeljio biskup Chartresa Fulbert razvijajući profane discipline <em>trivium</em> i <em>quadrivium</em>. Vrsnim poučavanjem i razvojem različitih disciplina &scaron;kola u Chartresu u prvoj polovici 12. stoljeća doživljava procvat i svoje zlatno doba u razdoblju od 1100. do 1160. godine. U njoj su tada predavali mnogi glasoviti filozofi, teolozi i znanstvenici zbog kojih je &scaron;kola uživala izniman ugled. Zbog usmjerenja i visoke razine studija imala je važnu ulogu u 11. i 12. stoljeću, upravo u razdoblju kada dolazi do velikih promjena u znanstvenim i filozofskim shvaćanjima u zapadnoj Europi .&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Herman se je živio u razdoblju kada su postojale samo samostanske &scaron;kole i koje je prethodilo razvoju visoko&scaron;kolskih institucija i pojavi prvih sveučili&scaron;ta u Europi. U tom razdoblju, tek su se malobrojni laici bavili izučavanjem filozofije i znanosti. Stoga, njegova odluka da nakon &scaron;kolovanja u Istri napusti rodni zavičaj i nastavi daljnje usavr&scaron;avanje svojih znanja također je i pokazatelj kako je već &scaron;kolovanjem u benediktinskoj samostanskoj &scaron;koli u Istri dobio snažne poticaje i želju da produbi svoja znanja, kao i solidna temeljna znanja iz područja <em>trivija</em> (gramatika, retorika dijalektika) i <em>kvadrivija</em> (aritmetika, geometrija, astronomija, glazba), na kojima je dalje razvijao svoje intelektualne interese.</p>"
        opiseng = ""
        nazivhr = "Hermanovo usavršavanje u glasovitoj katedralnoj školi u Chartresu "
        naziveng = ""
    } else if (slika == '22.jpg') {
        opishr = "<p>Nakon &scaron;kolovanja u katedralnoj &scaron;koli u Chartresu (1130-1134), Herman 1135. nastavlja &scaron;kolovanje u Parizu. Herman se jo&scaron; tijekom &scaron;kolovanja u Chartresu zbližio i s Englezom Robertom iz Kettona, ponekada navođenim kao Robert iz Chestera. Dijelili su zajedničke interese i obojica su bili pod velikim utjecajem učenjaka i njihova profesora Thierryja iz Chartresa od kojeg su dobili ključna znanja iz područja filozofije, prirodne filozofije, astronomije, astrologije i matematike, koje će ih ne samo profilirati kao filozofe i znanstvenike, već i potaknuti na samostalni znanstveni, filozofski i prevoditeljski rad. Kada je Thierry 1135. godine postao kancelarom katedralne &scaron;kole u Parizu, njegovi učenici Herman i Robert također su slijedili svog učitelja u Pariz da bi tamo slu&scaron;ali njegova predavanja kod Malog mosta na obali Seine i u Parizu dovr&scaron;ili studij. Već u vrijeme kada je Thierry pre&scaron;ao na katedralnu &scaron;kolu u Parizu, ona je uživala znatan ugled koji će s vremenom jo&scaron; rasti i 1200. godine postati će jednim od prvih sveučili&scaron;ta u Europi. Prvih godina nakon Hermanova i Robertova zavr&scaron;etka studija u Parizu, o njima nema sačuvanih podataka. Može se pretpostaviti kako su pod utjecajem Thierrya jo&scaron; za vrijeme &scaron;kolovanja razvili sklonost izučavanju arapske znanosti i filozofije. Arapski su utjecaji bili prisutni u katedralnoj &scaron;koli, a prvi Adelardovi prijevodi s arapskog na latinski izvornih arapskih znanstvenih i filozofskih djela i zagubljenih grčkih djela već su bili poznati i &scaron;irili se prijepisima jo&scaron; u doba Hermanova i Robertova studija. Ta je duhovna klima i dostupnost prvih izvora islamske i arapske znanstvene tradicije neosporno potaknula Hermana i Roberta da nakon &scaron;to su u Parizu apsolvirali <em>artes liberales</em> napuste Europu i odluče se krenuti na dugo putovanje tragovima arapske filozofije i znanosti. Zadivljen mudro&scaron;ću magistra Thierryja, Herman iskreno&scaron;ću učenika priznaje kako je svog učitelja poku&scaron;ao nasljedovati u znanju zajedno sa svojim prijateljem Robertom od Kettona, s kojim će proputovati Mediteran i Bliski istok.</p>"
        opiseng = ""
        nazivhr = "Hermanovo školovanje na katedralnoj školi u Parizu"
        naziveng = ""
    } else if (slika == '23.jpg') {
        opishr = "<p>Detalj crteža iz djela <em>Chronica maiora</em>, koju je u 13. stoljeću napisao Matthew of Paris, a prikazuje velikog antičkog matematičara i učenjaka Euklida s prijelaza iz 4. u 3. stoljeće prije Krista, kako promatra nebo i Hermana Dalmatina s astrolabom u ruci.</p>"
        opiseng = ""
        nazivhr = "Herman Dalmatin s astrolabom u ruci"
        naziveng = ""
    } else if (slika == '24.jpg') {
        opishr = "<p><strong>Geocentrični sustav</strong>&nbsp;ili&nbsp;<strong>Ptolemejev sustav</strong>&nbsp;je model&nbsp;Sunčeva sustava&nbsp;i antički prikaz cijeloga&nbsp;svijeta&nbsp;po kojem se&nbsp;Zemlja&nbsp;nalazi u njegovu sredi&scaron;tu, u kojem se sva se&nbsp;nebeska tijela&nbsp;okrenu oko nje jedanput na&nbsp;dan, usto&nbsp;Mjesec&nbsp;jedanput na&nbsp;mjesec, a&nbsp;Sunce&nbsp;jo&scaron; i jedanput&nbsp;godi&scaron;nje. Ovaj antički model svijeta je odgovarao izravnom opažaju. Razvio ga je&nbsp;Hiparh, a dovr&scaron;io&nbsp;Klaudije Ptolemej&nbsp;iz&nbsp;Aleksandrije&nbsp;u 2.&nbsp;stoljeću, pa je sustav ostao prihvaćen sve do 16.&nbsp;stoljeća. Isprva je bilo zami&scaron;ljeno da se svaki&nbsp;planet&nbsp;nalazi na posebnoj&nbsp;sferi, a&nbsp;zvijezde&nbsp;na posljednjoj. Zatim su uvedeni sustavi&nbsp;kružnica,&nbsp;epicikla&nbsp;i&nbsp;deferenta. Epicikl (uveo ga je&nbsp;Apolonije iz Perge) mala je kružnica po kojoj se giba planet, dok se centar epicikla giba većom kružnicom,&nbsp;deferentom. Vidljivo je gibanje direktno ili progradno, kada se planet giba od zapada prema istoku, te&nbsp;retrogradno, kada se planet vraća te, čineći petlju, ponovno kreće na istok. Takav je način gibanja u&nbsp;Kopernikovu, to jest&nbsp;heliocentričnom sustavu&nbsp;rastumačen projekcijom položaja&nbsp;planeta&nbsp;na nebu zato &scaron;to se planeti različitom brzinom gibaju oko Sunca.</p>"
        opiseng = ""
        nazivhr = "Ptolemejev sustav"
        naziveng = ""
    } else if (slika == '25.jpg') {
        opishr = "<p>Gotovo kod svih starih naroda nalazimo predodžbe o izgledu i postanku svijeta. U početku bile su uglavnom temeljene na različitim mitolo&scaron;kim vjerovanjima. Iako su, prvenstveno zbog praktičnih potreba, pažljivo praćena gibanja nebeskih tijela, poku&scaron;aji njihovog obja&scaron;njavanja bili su uglavnom neanalitički, ponajvi&scaron;e zbog nepoznavanja geometrije. Astronomija kao egzaktna znanost, počela se razvijati u staroj Grčkoj. Osim &scaron;to su do&scaron;li do mnogih značajnih astronomskih otkrića, stari Grci su u teoretska modeliranja zakonitosti gibanja nebeskih tijela uključili geometriju, stvarajući tako prve analitičke kozmolo&scaron;ke teorije. Sakupiv&scaron;i astronomska znanja svoga vremena, Aristotel (4. stoljeće prije Krista) je stvorio kozmolo&scaron;ku teoriju koja će dominirati sljedećih 18 stoljeća. Prema toj teoriji Zemlja je u sredi&scaron;tu svemira jer, kako je tumačio Aristotel, svako tijelo bačeno u vis opet pada prema sredi&scaron;tu Zemlje, pa je &ldquo;jasno&rdquo; da je mjesto na&scaron;eg planeta u sredi&scaron;tu svemira. Iz oblika Zemljine sjene &scaron;to se vidi na Mjesecu za vrijeme pomrčine, Aristotel zaključuje da je Zemlja okrugla. Jo&scaron; jedan dokaz za to proizlazi iz činjenice &scaron;to se iz raznih dijelova Zemljine povr&scaron;ine pojedine zvijezde u isto doba vide nad obzorom u različitim visinama (koristeći pretpostavku da su zvijezde jako udaljene). Na temelju toga i nekih ranijih mjerenja, prema Aristotelu Zemljin polumjer iznosi oko 74000 kilometara (kasnijim mjerenjima Eratosten je dobio vrijednost mnogo bližu stvarnoj). Sljedeća bitna postavka ove kozmologije bila je da Zemlja miruje. Jedan od glavnih dokaza Zemljine nepomičnosti temeljio se na nepromijenjenim položajima, odnosno prividnim udaljenostima između zvijezda. Osim toga, s obzirom na pretpostavljenu Zemljinu veličinu moglo se lako izračunati da bi obodna brzina na Zemljinoj povr&scaron;ini trebala biti velika. Tako bi, prema Aristotelovom mi&scaron;ljenju, svaki predmet bačen u vis morao pasti na sasvim drugo mjesto.</p><p>Da bi objasnio gibanja nebeskih tijela, Aristotel prihvaća Eudoksovu ideju o mehaničkom sustavu vrtećih koncentričnih sfera, koje nose nebeska tijela. Svakom od planeta pripadalo je nekoliko sfera, koje svojim gibanjem uzrokuju čudnovate planetne petlje. O rasporedu planeta po udaljenostima od Zemlje zaključivali su grčki astronomi na temelju vremena trajanja prividnog retrogradnog gibanja planeta. Iza posljednje sfere, na kojoj su zvijezde stajaćice, nalazio se pokretač svih gibanja Primum immobile. Tako je prema Aristotelovom kozmolo&scaron;kom modelu, svemir konačne veličine sa sredi&scaron;tem u kojem se nalazi na&scaron; planet.</p><p>Aristotel je također tvrdio da su sva tijela unutar Mjesečeve staze građena od četiri &ldquo;elementa&rdquo;: zemlje, zraka, vode i vatre. Peti element bio je onaj od kojeg su izgrađene nebeske sfere i proziran je. Gledajući s dana&scaron;nje vremenske udaljenosti, Aristotelovo učenje može izgledati naivno. Međutim, ne možemo reći da nije analitičko. Netočnost dokaza navedenih za Zemljinu nepomičnost utvrđena je tek u sedamnaestom stoljeću kada je utemeljen zakon tromosti, te početkom devetnaestog stoljeća kada je prvi put izmjerena zvjezdana paralaksa. Aristotelova kozmologija odgovarala je onda&scaron;njem stupnju razvitka znanosti i zahvaljujući okolnostima koje su vladale Srednjim vijekom ona se uspjela održati punih osamnaest stoljeća, a njezin utemeljitelj ostat će upisan u povijesti znanosti, kao jedan od najvećih znanstvenih autoriteta.</p><p>Nepuno stoljeće nakon Aristotela po prvi put se pojavljuje ideja da je Sunce sredi&scaron;nje tijelo na&scaron;eg planetnog sustava. Njen utemeljitelj bio je grčki astronom Aristarh. Od njegovih spisa sačuvano je u potpunosti samo jedno djelo, u kojem je opisana metoda određivanja udaljenosti Mjeseca i Sunca. Ona se temeljila na geometrijskom razmatranju posebnih položaja, koje uzajamno zauzimaju Zemlja, Mjesec i Sunce. Primijeniv&scaron;i svoju metodu, Aristarh je uspio odrediti udaljenosti Mjeseca i Sunca, iskazane u iznosu Zemljinog polumjera. Premda je, uslijed nepreciznih mjerenja, dobio dosta grube vrijednosti, na temelju tih podataka je zaključeno da je pogre&scaron;no tvrditi kako mnogo veće Sunce kruži oko relativno male Zemlje. Prema tome, opažano godi&scaron;nje gibanje Sunca samo je prividno i posljedica je stvarnog gibanja na&scaron;eg planeta. Također je tvrdio da su dnevna gibanja nebeskih tijela posljedica Zemljine vrtnje, na &scaron;to su ukazivali jo&scaron; neki od Pitagorejaca, a da godi&scaron;nja doba nastaju uslijed nagnutosti Zemljine osi vrtnje prema ravnini staze na&scaron;eg planeta oko Sunca.</p><p>Aristarhova genijalnost možda se najbolje očituje po tome &scaron;to je nepromijenjen položaj zvijezda tijekom godine tumačio time da je njihova sfera beskonačno velika u odnosu na veličinu Zemljine staze oko Sunca. Tako je Aristarh &ldquo;pro&scaron;irio granice&rdquo; svemira i jednim osebujnim znanstvenim načinom do&scaron;ao do predodžbe o stvarnom izgledu Sunčeva sustava. Međutim, njegovo mi&scaron;ljenje nije bilo prihvaćeno. Dapače, kod njegovih suvremenika pojavio se veliki otpor prema heliocentričnom sustavu svijeta, čemu je kasnije naročito doprinio i veliki autoritet toga doba Hiparh. Konačnu prevlast geocentričnom sustavu svijeta izborio je Ptolemej svojim poznatim <em>Zbornikom</em>, koji je objavljen 140 godina prije Krista. Ptolemej je nadopunio Aristotelovu kozmolo&scaron;ku teoriju, uvodeći deferente i epicikle radi obja&scaron;njenja naoko zamr&scaron;enih planetnih gibanja. Naime, prema Ptolemeju svaki se planet gibao oko nepomične Zemlje po manjoj kružnici (epicikl), čije je sredi&scaron;te po većoj kružnici (deferent) obilazilo Zemlju. Spomenimo da je Ptolemejev Zbornik sadržavao mnoga astronomska znanja i on je stoljećima smatran glavnim astronomskim udžbenikom. Zanimljivo je da su Hiparh i Ptolemej, sličnom metodom kao i Aristarh, izmjerili udaljenosti Mjeseca i Sunca i, iako su dobili znatno točnije vrijednosti, prihvatili su geocentrični sustav svijeta, u kojem Zemlja miruje. Aristarh i njegovi sljedbenici, od kojih su najpoznatiji Arhimed i Apolonij, ostali su tako u sjeni svojih prethodnika. Značaj njihovih radova doći će do izražaja tek u 15. stoljeću, kada se s njima upoznaje Kopernik.</p>"
        opiseng = ""
        nazivhr = "Prikaz Aristotelove kozmologije"
        naziveng = ""
    }



    if (localStorage.getItem("jezik") == "hr") {
        opis = opishr;
        naziv = nazivhr;
        confirm_button = "nova igra"

    } else {
        opis = opiseng;
        naziv = naziveng;
        confirm_button = "new game"
    }
    if (localStorage.getItem("jezik") == "hr") {
        confirm_button = "nova igra"
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