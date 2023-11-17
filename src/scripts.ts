/*
import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));
*/

// Nospiežot uz 1. pogas, 1. kvadrāta krāsa nomainās uz dzeltenu krāsu
const button1 = document.querySelector<HTMLButtonElement>(".button1");
const cube1: HTMLElement | null = document.getElementById("cube1");
button1.addEventListener("click", () => {
	cube1.style.backgroundColor = 'yellow';
	}
);

// Nospiežot uz 2. pogas, 2. kvadrātā teksts nomainās uz SUCCESS
const button2 = document.querySelector<HTMLButtonElement>(".button2");
const cube2: HTMLElement | null = document.getElementById("cube2");
button2.addEventListener("click", () => {
		cube2.innerText = "SUCCESS";
	}
);

// Nospiežot uz 3. pogas, 3. kvadrāts kļūst neredzams
const button3 = document.querySelector<HTMLButtonElement>(".button3");
const cube3: HTMLElement | null = document.getElementById("cube3");
button3.addEventListener("click", () => {
	cube3.style.opacity = '0';
	}
);

//Nospiežot uz 4. pogas, 4. kvadrāts kļūst neredzams, nospiežot vēlreiz, tas atkal kļūst redzams
const button4 = document.querySelector<HTMLButtonElement>(".button4");
const cube4: HTMLElement | null = document.getElementById("cube4");
	if(button4) {   // Vispirms pārbaudīt, vai button4 ir truthy jeb null. Ja nav null, tātad button4 ir HTML dokumentā, tātad ir jāpievieno event listener.
		button4.addEventListener("click", () => {
			if(cube4) {  // Pirms turpinam darboties, pārbaudam arī to, vai cube4 ir truthy. Ja ir, pārbaudam, vai ir hidden. Ja ir, taisam par visible, pretējā gadījumā - par hidden.
				cube4.style.visibility === 'hidden' ? cube4.style.visibility = 'visible' : cube4.style.visibility = 'hidden';
			}
		});
	};

/* Nospiežot uz 5. pogas, 5. kvadrāta krāsa nomainās uz vienu no 5 iepriekš
izdomātām krāsām. Katru reizi uz citu, bet var atkārtoties. */
const button5 = document.querySelector<HTMLButtonElement>(".button5");
const cube5: HTMLElement | null = document.getElementById("cube5");
if (button5) {
	button5.addEventListener("click", () => {
// Definējam masīvu, kas satur dažādas krāsas:
		let colorsArray = ["red", "green", "blue", "purple", "orange"];
/* Ar Math.random() metodes pielietošanu (t.i. reizinot ar krāsu masīva garumu), 
liekam ģenerēt jebkuru ciparu (starp 0 un 4, jo tik garš ir masīvs). Ar Math.floor() noapaļojam iegūto ciparu līdz apaļajam */
	let randomIndex = Math.floor(Math.random() * colorsArray.length); 
// Definējam krāsas maiņu randomā:
		cube5.style.backgroundColor = colorsArray[randomIndex];
	});
};

/* Nospiežot uz 6. pogas, 6.kvadrātā skaitlis sāk ik pa 3 sekundēm
palielināties par 1. Kad tiek līdz 10, apstājas. */
const button6 = document.querySelector<HTMLButtonElement>(".button6");
const cube6: HTMLElement | null = document.getElementById("cube6");
let timer: string | number | NodeJS.Timeout;
let count = 1;

if (button6 && cube6) { // Var apvienot vienā rindā (pārbaudam, vai tie ir truthy)
    button6.addEventListener("click", () => {
        clearInterval(timer); // Jānotīra taimeris, ja nu tas būtu ieslēgts iepriekš. clearInterval() tāpat kā setInterval() ir globāla funkcija.
        // Iestatam timeri ar setInterval(), kas ik pēc 3 dekundēm updatos cube6 tekstu ar innerHTML jeb innerText (abi varianti der)
        timer = setInterval(() => {
            cube6.innerHTML = count.toString();
            count++;
            if (count > 10) { // Kad sasniedz ciparu desmit, tad resetojas uz 1 un turpina skaitīt no jauna
                // count = 1; // Šis koda noslēģums, ja gribētu, ka pēc cipara 10 sasniegšanas taimeris resetojas uz 1 un turpina skaitīt no jauna
								clearInterval(timer); // Šo iestatam, ja negribam, ka timeris turpina skaitļošanu
            }
        }, 3000); // Runājām nodarbībā, ka 3000ms = 3min
    });
};

/* Nospiežot uz 7. pogas, visi kvadrādi nomaina krāsu uz #18D5E1 
un lapas background krāsa nomainas uz #000000 */
const button7 = document.querySelector<HTMLButtonElement>(".button7");
const allCubes = document.querySelectorAll<HTMLElement>('.cube'); //querySelectorAll, lai neapstātos pie pirmā atrastā elementa, bet aptvertu visus, kuriem ir klase cube
const body = document.body; // Lai piekļūtu arī body. Te vienkāršots pieraksts, jo body ir unikāls

if (button7 && body) {
	button7.addEventListener("click", () => {
			allCubes.forEach(cube => cube.style.color = '#18D5E1'); // forEach() liek attiecināt funkciju uz katru elementu, kad tie ir vairāki
			body.style.backgroundColor = '#000000';
	});
}

// Uzliekot peli virs 1. kvadrāta, tam krāsa nomainas uz sarkanu 
const cubeFirst: HTMLElement | null = document.getElementById("cube1");

if(cubeFirst){
	cubeFirst.addEventListener('mouseenter', () => { // Kursors virs kvadrāta
		cubeFirst.style.backgroundColor = 'red';
	});
	cubeFirst.addEventListener('mouseleave', () => { // Ja gribam paturpināt, ka krāsa nomainās uz sākotnējo, kad peli novāc
		cubeFirst.style.backgroundColor = '#1FC2AE';
	});
};

// Ekstra: Uzliekot peli virs 5. kvadrāta, ieslēdzas taimeris un 
// skaita līdz 10, noņemot peli resetojas uz 0 un apstājas.
const cubeFive: HTMLElement | null = document.getElementById("cube5");
let timer2: string | number | NodeJS.Timeout;
let count2 = 1;

if (cubeFive) {
	cubeFive.addEventListener('mouseenter', () => {
    clearInterval(timer2);
      timer2 = setInterval(() => {
        cubeFive.innerHTML = count2.toString();
        count2++;
        if (count2 > 10) {
          count2 = 1;
        }
			}, 1000);
  });
	cubeFive.addEventListener('mouseleave', () => {
		clearInterval(timer2); // Izslēdzam taimeri
		cubeFive.innerHTML = '0'; // Izvadam 0, kā apliecinājumu resetam
	});
};

// Ekstra: Rakstot tekstu input laukā, tas parādās arī zem inputa
function showText() { // Izmēģinu piegājienu ar funkciju. Te html dok'ā jābūt pievienotam funkcijas showText() izsaukumam (oninput="")
	let textInput = document.getElementById("input-field") as HTMLInputElement;
	let textOutput = document.getElementById("display-text") as HTMLElement;
		if (textInput && textOutput) {
			textInput.addEventListener('input', () => { // Teksta ievade trigerēs funkciju
				textOutput.innerHTML = textInput.value; // Nosakam, ka tekstam jāatkārtojas
			});
		}
};
window.showText = showText; // Šis padara izveidoto funkciju redzamu globalajam scopam. Jo savādāk funkcija būtu definēta (redzama) tikai specifiskam scopam (tvērums jeb apgabals/ 'oblastj')
