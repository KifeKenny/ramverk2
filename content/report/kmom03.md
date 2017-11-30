#### Kmom03

**Ops: kör med docker-toolboxes eftersom jag inte har windows 10. Så har inte kunnat testa make delen för docker. Men docker kommandona funkar för mig i docker terminalen.**



**1. Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?**

Jag valde dem tekniker som visades i övningen. Körde mocha med istanbul för unittester och kunna se hur mycket av koden som mina tester täckte. Sen körde jag med dem mesta av testverktygen som fanns i make filen. Anledningen var väl för det var dem som visades upp och dem kändes bra.


**2. Berätta om cin CI-kedja och reflektera över de valen du gjorde?**

Körde med Travis, Coveralls, Codecov, Codeclimate, och Scrutinizer. Samma här valde dem för att dem visades I övningen. Ska nog byta till CircleCi istället för Travis eftersom jag får stryl med travis. Men jag väntar med det tills nästa kursmoment.



**3. Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainerns och om du ser någon nytta med detta.**

Jag integrerade dem så som det visades och det gick bra. Nyttan med docker är väll att man kan testa sin kod på olika version av node och se om det fungerar på nyare och äldre versioner.



**4. Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?**

Jag tycker att jag förstår mig på det okej. Mina reflektioner är väll lite blandade. Själv tycker jag att man ska först skriva sina funktioner med tanke på testning och sen testa. Men deras sätt låter väll intressant så man får väll testade det någon gång och se vad man tycker.



**5. Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.**

Denna del förvirrade mig helt i början. Så jag kollade på mos video och läste kommentarerna han skrev om hur man skulle göra den. Min uppfattning blev då att denna del var mest ute efter att vi skulle skriva en modul och sen testa den. Sen att vi skulle jobba vidare med modulen under kursens gång.


Så skrev början till ett brädspel och testade den. Vet inte med klient delen och så men det verkar komma mer om den delen i nästa kursmoment så väntar till dess.
