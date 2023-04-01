import React, { forwardRef } from 'react';
import styles from './Tjanster.module.css';

const Tjanster = forwardRef((props, ref) => {
  const [showMore, setShowMore] = React.useState([false, false, false]);

  return (
    <div className={styles['tjanster-container']} ref={ref}>
      <div className={styles['tjanster-cards']}>
        <div className={styles['card']}>
          <div className={styles['service-icon-container']}>
            <img
              className={styles['service-icon']}
              src='/assets/Images/house.png'
              alt=''
            />
          </div>
          <h3 className={styles['card-h3']}>BYGGSTÄD</h3>
          <p className={styles['card-p']}>
            Har du renoverat eller byggt nytt? <br /> I samband med
            renovering och nybyggnation är städning något man garanterat
            kommer att behöva, men gärna själv vill slippa. Vi hjälper dig!
          </p>
          <p
            className={styles['card-p-more']}
            style={showMore[0] ? {} : { display: 'none' }}
          >
            Vad ingår i en byggstädning? Vid en byggstädning dammar och
            våttorkar vi alla synliga ytor och putsar fönster. Vi är
            lyhörda till dina önskemål och styr uppdraget efter vad du vill
            ha utfört.
          </p>
          <div className={styles['card-btn-holder']}>
            <div
              className={styles['card-a']}
              onClick={() =>
                setShowMore((prev) => {
                  const [current, ...rest] = prev;
                  return [!current, ...rest];
                })
              }
            >
              Läs mer...
            </div>
          </div>
        </div>
        <div className={styles['card']}>
          <div className={styles['service-icon-container']}>
            <img
              className={styles['service-icon']}
              src='/assets/Images/window-cleaning.png'
              alt=''
            />
          </div>
          <h3 className={styles['card-h3']}>FÖNSTERPUTS</h3>
          <p className={styles['card-p']}>
            Fönster är en viktig del av sitt hem eller arbetsplats, och
            därför erbjuder vi fönsterputsningstjänster som passar dina
            specifika behov och önskemål. Vi arbetar alltid för att
            överträffa dina förväntningar!
          </p>
          <p
            className={styles['card-p-more']}
            style={showMore[1] ? {} : { display: 'none' }}
          >
            Vi erbjuder olika typer av abonnemang för fönsterputs som både
            är ekonomiskt fördelaktiga och gör att ni slipper hålla reda på
            när det är dags för nästa putsning. Utöver fönsterputsning är
            våra medarbetare utbildade i höghöjdsarbete samt säkerhet för
            att kunna arbeta med hjälp lift. Vidare står vi självklart för
            allt rengöringsmedel och all annan utrustning som krävs för att
            göra jobbet. Rena fönster betyder mycket för välbefinnande och
            trivsel på arbetsplatser, och bidrar till att skapa ett
            välkomnande och professionellt intryck. Det leder alltså till
            en bättre arbetsmiljö för era medarbetare och skapar en
            trevligare miljö för era besökare, vilket bidrar till bättre
            resultat för er verksamhet.
          </p>
          <div className={styles['card-btn-holder']}>
            <div
              className={styles['card-a']}
              onClick={() =>
                setShowMore((prev) => {
                  const [first, current, ...rest] = prev;
                  return [first, !current, ...rest];
                })
              }
            >
              Läs mer...
            </div>
          </div>
        </div>
        <div className={styles['card']}>
          <div className={styles['service-icon-container']}>
            <img
              className={styles['service-icon']}
              src='/assets/Images/responsible.png'
              alt=''
            />
          </div>
          <h3 className={styles['card-h3']}>FLYTTSTÄD</h3>
          <p className={styles['card-p']}>
            Vi förstår att flyttning kan vara en stressig upplevelse, och
            det är därför vi vill göra det så enkelt och smidigt som
            möjligt för dig. Med vår erfarenhet kan du lita på att vi tar
            hand om din flyttstädning med expertis!
          </p>
          <p
            className={styles['card-p-more']}
            style={showMore[2] ? {} : { display: 'none' }}
          >
            Vi är stolta över att ha ett team av dedikerade och
            professionella flyttare som arbetar med noggrannhet och omsorg
            för att säkerställa att allt går enligt planen. Oavsett om du
            flyttar till en annan stad eller bara några kvarter bort, kan
            du känna dig trygg med att dina ägodelar är i goda händer. Vi
            erbjuder skräddarsydda flyttlösningar som passar dina specifika
            behov och önskemål. Vi förstår vikten av att ha tillförlitliga
            och professionella flyttare som du kan lita på, och det är
            precis vad du får när du väljer oss. Så om du letar efter en
            enkel och smidig flyttupplevelse, är HF här för att hjälpa
            till. Kontakta oss idag för att få mer information om våra
            tjänster och hur vi kan hjälpa dig att flytta på ett säkert och
            effektivt sätt.
          </p>
          <div className={styles['card-btn-holder']}>
            <a
              className={styles['card-a']}
              onClick={() =>
                setShowMore((prev) => {
                  const [first, second, current] = prev;
                  return [first, second, !current];
                })
              }
            >
              Läs mer...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

Tjanster.displayName = 'Tjanster';
export default Tjanster;
