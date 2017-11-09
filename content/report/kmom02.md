#### Kmom02

**Allmänt:**

Organiserade mina filer bättre. Gjorde så routerna är för sig och la till så att jag kan skriva sidorna i markdown.


**Uppgiften (Integrera dock-compose med express)**

Använde mig av ”docker toolbox” eftersom jag inte har Windows 10 och känner inte för att uppdatera till det heller. Men ”docker toolbox” var inga problem att använda, den fungerade hur bra som helst för mig.


Första delen med att skriva tre olika versioner för php med apache var ju det som vi gjorde i övningen, så inga problem där.


Den andra delen var lite svårare fick läsa igenom dokumentation och kolla på exempel för att fixa den delen. Denna videon tyckte jag var bra: https://www.youtube.com/watch?v=edPrPcgjTgw förklarar snabbt grunderna att starta din node fil. Sen dokumentationen förklarar också det bra: https://github.com/nodejs/dockernode/blob/master/README.md#how-to-use-this-image . Sen lite mer små exemple fick jag kolla igenom för att få det att fungera bra.


Ett allmänt problem jag hade var att jag inte kunde köra t.ex om jag satt min port på 8080 så kunde jag inte köra ”localhost:8080” utan fick köra ”192.168.99.100:8080” istället.


**Har du jobbat med Docker eller andra virtualiseringstekniker innan?**

Har inte jobbat med just docker innan, men har arbetat med ”virtuel box”
I Linux kursen förra läsåret.


**Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?**

Ja du kan ju testa din kod på flera olika ställen samtidigt och t.ex lokalisera problem bättre. Du kan ju också testa införande av olika moduler i din kod.


**Gick allt smidigt eller stötte du på problem?**

Vissa delar gick rätt så smidigt, sen fastnade jag lite i slutet. Använde mig som sagt av ”docker toolbox” vilket var inga problem, den sköte sig bra. Övningen fungerade bra eftersom det var bara att följa steg för steg. Problemet jag hade var väll hur jag skulle skriva min ”docker-composer” fil med dockfiler och hur jag fick den att lyssna på en port rätt. Det löste sig efter jag läste igenom dokumentation och kollat på exempel.

**Skapade du din egen image, berätta om den?**

Nej.

p.s npm start fungerar fortfarande inte, får samma felmeddelande.
