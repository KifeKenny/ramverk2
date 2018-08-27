#### Kmom04

**1. Är du ny på realtidsprogrammering eller har du gjort liknande tidigare?**

Har jobbat med det i Python innan men inte på samma sätt på webben.  


**2. Hur gick det att jobba med konceptet realtidsprogrammering i webben, några reflektioner?**

Det gick relativt bra, lite förvirrad i början men det löste sig rätt bra till slut tycker jag.


**3. Berätta om din chatt som du integrerade i redovisa-sidan.**

Skrev först en separat chatt program där jag bröt ut serversidans webbsocket i en egen klass(”watelChatt”) som jag sen kallar på i min index fil. Klassen är baserad på övningen och samma med klient sidan, använder mig av json protokoll. Efter min separata server/klient program fungerade så kopierade jag bara alla filer och klistrade in dem i min redovisar program ”src/chatt”. Skrev en ny klient sida i ”pug” och fick flytta min JavaScript klient fil till ”public/js/client.js” sen fungerade.


**4. Berätta om den realtidsfunktionalitet du väljer att integrera i din klient/server applikation.**

Så jag integrerade en chatt först eftersom jag redan hade en fungerande modul och jag kunde rätt enkelt integrera det likadant som på redovisar sidan. Tänkte att jag kunde ha chatt fönstret till att skriva ut meddelanden till användarna. Gjorde så att endast två personer kunde ansluta sig till chatten eftersom jag planerar att göra ett turbaserat spel där två spelare möter varandra. I framtiden kan man ju utöka det så fler spelare kan skapa egna spel men just nu kör vi bara på en spel lobby.
Så när två spelare ansluter sig till servern skapas ett spel bord från min ”gameboard” klass i server webbsocketen. Just nu skrivs endast spelbord objektet ut för spelarna när dem är anslutna. När någon spelare disconnectar så slutar spelet. La till två apier som använder sig av webbsocketen för att skicka ut värden om ”gameboarden” och antal anslutna klienter.


La till en massa små saker som jag kommer att använda mig av sen som ”ws.id”.


Just nu använder sig min webbsocket klass sig av min ”gameboard” klass men kommer senare att göra en separat ”game” klass som kommer att använda sig av båda dessa klasser som kommer agera som spelet i helhet.
