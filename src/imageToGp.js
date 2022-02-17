import abudhabi from "./assets/images/abudhabiGP.png";
import australian from "./assets/images/australianGP.png";
import austrian from "./assets/images/austrianGP.png";
import bahrain from "./assets/images/bahrainGP.png";
import baku from "./assets/images/bakuGP.png";
import belgian from "./assets/images/belgianGP.png";
import brazilian from "./assets/images/brazilianGP.png";
import british from "./assets/images/britishGP.png";
import canadian from "./assets/images/canadianGP.png";
import dutch from "./assets/images/dutchGP.png";
import french from "./assets/images/frenchGP.png";
import hungarian from "./assets/images/hungarianGP.png";
import imola from "./assets/images/imolaGP.png";
import italian from "./assets/images/italianGP.png";
import japanese from "./assets/images/japaneseGP.png";
import mexico from "./assets/images/mexicoGP.png";
import miami from "./assets/images/miamiGP.png";
import monaco from "./assets/images/monacoGP.png";
import russian from "./assets/images/russianGP.png";
import saudi from "./assets/images/saudiGP.png";
import singapore from "./assets/images/singaporeGP.png";
import spanish from "./assets/images/spanishGP.png";
import us from "./assets/images/usGP.png";

const imageToGP = (race) => {
    switch (race) {
      case "Bahrain Grand Prix":
        return bahrain;
      case "Saudi Arabian Grand Prix":
        return saudi;
      case "Australian Grand Prix":
        return australian;
      case "Emilia Romagna Grand Prix":
        return imola;
      case "Miami Grand Prix":
        return miami;
      case "Spanish Grand Prix":
        return spanish;
      case "Monaco Grand Prix":
        return monaco;
      case "Azerbaijan Grand Prix":
        return baku;
      case "Canadian Grand Prix":
        return canadian;
      case "British Grand Prix":
        return british;
      case "Austrian Grand Prix":
        return austrian;
      case "French Grand Prix":
        return french;
      case "Hungarian Grand Prix":
        return hungarian;
      case "Belgian Grand Prix":
        return belgian;
      case "Dutch Grand Prix":
        return dutch;
      case "Italian Grand Prix":
        return italian;
      case "Russian Grand Prix":
        return russian;
      case "Singapore Grand Prix":
        return singapore;
      case "Japanese Grand Prix":
        return japanese;
      case "United States Grand Prix":
        return us;
      case "Mexico City Grand Prix":
        return mexico;
      case "Sâo Paulo Grand Prix":
        return brazilian;
      case "Abu Dhabi Grand Prix":
        return abudhabi;
        default:
            return "";
    }
  };

  export default imageToGP;