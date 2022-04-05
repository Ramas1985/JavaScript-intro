const akys = 'blue';

switch (akys) {
      case 'blue' :
          console.log('Melynos')
          break;

      case 'Green' :
          console.log('Zalios')
          break;

      default:
          console.log('Nezinoma spalva');
          break;
}

console.log('-------------------------------')

const day = 2;

switch (day) {
    case 1:
        console.log('Darbo diena');
        break;
    case 2:
        console.log('Darbo diena');
        break;
    case 3:
        console.log('Darbo diena');
        break;
    case 4:
        console.log('Darbo diena');
        break;
    case 5:
        console.log('Darbo diena');
        break;
    case 6:
        console.log('Savaitgalis');
        break;
    case 7:
        console.log('Savaitgalis');
        break;
    default:
        console.log('Neatpazinta diena');
        break;
}

console.log('-------------------------------')

const diena = 2;

switch (diena) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Darbo diena');
        break;

    case 6:
    case 7:
        console.log('Savaitgalis');
        break;
        
    default:
        console.log('Nezinoma diena');
        break;
}    