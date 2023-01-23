// **********************************************************************

const { func } = require("prop-types");

//            ######## REACT NOTLARI-1 ########

// **********************************************************************

//** DOM AĞACI NEDİR =>

//DOM (Document Object Model) ağacı, bir web sayfasının HTML veya
//  XML kodunun yapısal olarak temsilidir. Bu yapı, tarayıcı tarafından
//  anlaşılabilir ve manipüle edilebilir hale getirilir. DOM ağacı, web sayfasının
//  elementlerini, özelliklerini ve ilişkilerini tanımlar. Örneğin, bir paragraf
//  elementinin içeriği, stili veya CSS sınıfı gibi özellikleri ile öğeler arasındaki ilişki gibi.
//  Bu yapı, JavaScript gibi dinamik web programlama dilleri tarafından kullanılarak web sayfasının içeriği ve
//  görünümü dinamik olarak değiştirilebilir.

//** {https://www.tasarimkodlama.com/web-tasarimi/html/dom-nedir/} **/
// örnek kodlar

// **********************************************************************

//** ARROW FUNCTİON NEDİR =>

//Arrow function, JavaScript'de bir fonksiyon tanımlamak için
//  kullanılan bir söntaks şeklidir. Arrow function, function anahtar
//  kelimesi yerine "=>" operatörünü kullanır. Arrow function daha kısa
//  ve daha okunaklı bir söntaks sunar ve genellikle callback fonksiyonları,
//  event handlers veya promise'lerle kullanılır. Örnek olarak:

const square = (x) => {
  return x * x;
};

console.log(square(5)); // 25

//veya eğer tek bir ifade kullanılacaksa

const square1 = (x) => x * x;
console.log(square1(5)); // 25

//Arrow function'lar, kullanıldıkları kontextin this anahtar kelimesine
//  bağlı olarak davranışları değişebilir.

// **********************************************************************

//** SAF(PURE) FONKSİYON NEDİR.

//Pure function, bir fonksiyonun girdileri ile sadece çıktıları arasında
//  bir ilişki içinde olmasıdır. Yani, pure function aynı girdilerle
//  çağrıldığında her zaman aynı çıktıyı verir. Ayrıca, pure function içinde
//  side-effect yapmaz yani içindeki kod yürütülürken sistemdeki başka
//  değişkenleri etkilemez veya değiştirmez. Bu yüzden pure function'lar
//  test edilebilir, okunaklı ve paralel olarak çalıştırılabilir.

//   Örnek olarak:

function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

//Bu fonksiyon sadece verilen iki sayıyı toplar ve sonucu döndürür.
//  Aynı girdilerle çağrıldığında her zaman aynı çıktıyı verir ve içinde
//  side-effect yok.
//  Ayrıca, pure function'lar ayrıca immutability'e sahip olmalıdır.
//  Yani, içinde kullanılan değişkenlerin değerleri değiştirilmez,
//  yalnızca yeni bir değer döndürülür.

//**********************************************************************

//** USE-EFFECT NEDİR.

// Linkten makaleye git.
// https://erdemuslu.medium.com/useeffect-kullanimi-uzerine-30328ac22742#:~:text=useEffect%2C%20hizli%20bir%20sekilde%20ozetlemek,cesitli%20event'ler%20de%20olabilir.

//**********************************************************************

//** MAP() NEDİR

//JavaScripte map()  fonksiyonu,bir dizinin her elemanını belirli bir işlem uygulayarak,
//yeni bir dizi oluşturur. Örneğin, bir dizideki tüm sayıların karesini almak için
//kullanılabilir.Örnek kullanım şöyledir.

var numbers = [1, 2, 3, 4];

var squaredNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(squaredNumbers); // [1,4,9,16]

//Bu örnekte "numbers" dizisi içindeki her ayı için "number*number" işlemi gerçekleştirilir
//ve yeni dizi olarak "squaredNumbers" oluşur.

//**********************************************************************

//** PROMİSES NEDİR

//Promise, JavaScript'de bir nesnenin bir özelliğidir. Bir promise,
//  bir işlemi yaparken bir sonuç döndürür veya hata oluşursa hata döndürür.
//  Bu, asenkron işlemleri yürütmek için kullanılır ve işlem tamamlandığında
//  veya hata oluştuğunda bir callback fonksiyonu çağırır. Örneğin, bir veri
//  setini sunucudan yüklemek için bir promise kullanabilirsiniz ve işlem
//  tamamlandığında veya hata oluştuğunda bir callback fonksiyonu çağırır.

//örnek promises oluşturma // Promise = Söz

const promise = new Promise((resolve, reject) => {
  //Asenkron işlem yapılıyor

  setTimeout(() => {
    if (true) {
      resolve("Promise başarıyla tamamlandı");
    } else {
      reject("Promise başarısız oldu");
    }
  }, 2000);
});

//Promise'i kullanma
promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

//Bu kod, 2 saniye içinde bir promise oluşturur. Eğer işlem başarılı olursa,
//  promise "Promise başarıyla tamamlandı" mesajını döndürür ve then()
//  metodunu çağırır. Eğer işlem başarısız olursa, promise "Promise
//  başarısız oldu" mesajını döndürür ve catch() metodunu çağırır.
//  Bu örnekte, yapılan işlem örnek olarak 2 saniye içinde gerçekleşecek bir
//  setTimeout kullanılmıştır. Gerçek uygulamalarda bu işlemler daha karmaşık
//  ve gerçek işlemler olabilir.

//**********************************************************************

//** FİLTER() NEDİR

//filter() JavaScript'de bir dizi metodudur. Bu metod, bir dizinin tüm
//  elemanlarını gezerek, belirli bir kriter karşılanana kadar her bir elemanı
//  kontrol eder. Kriter karşılandığında, o eleman dizinin yeni bir kopyasına
//  eklenir. Bu yeni dizi, filtrelenmiş dizi olarak adlandırılır ve sadece
//  kriter karşılandığı için seçilen elemanları içerir.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(evenNumbers); // [2,4,6,8,10]

//Bu örnekte, numbers dizisi içinde yer alan tüm sayılar gezilir
//  ve sayılar 2'ye tam bölünüyorsa, evenNumbers dizisine eklenir.
//  Bu şekilde evenNumbers dizisi sadece çift sayıları içerir.
//  filter() metodu, dizideki tüm elemanları gezmek için
//  kullanılabilir ve herhangi bir dizi türünde kullanılabilir.
//  Örneğin, bir dizideki tüm stringleri bulmak için de kullanabilirsiniz.

//**********************************************************************

//** İNCLUDES() NEDİR

//includes() JavaScript dili için bir dizi metodudur. Bu metod,
//  bir dizide belirtilen bir değerin var olup olmadığını kontrol
//  etmek için kullanılır. Eğer belirtilen değer dizide bulunuyorsa,
//  metod true değerini döndürür, aksi halde false değerini döndürür.

// Örnek olarak :

let fruits = ["apple", "bannana", "mango"];
console.log(fruits.includes("bannana")); //true
console.log(fruits.includes("orange")); //false

let fruits1 = ["bannana", "apple", "orange"];

if (fruits1.includes("apple")) {
  console.log("Fruit list includes apple");
} else {
  console.log("Fruit list does not include apple");
}

//Bu kod, dizide "apple" değerinin var olup olmadığını kontrol eder
//  ve eğer dizide mevcutsa "Fruit list includes apple" yazdırır, aksi
//  halde "Fruit list does not include apple" yazdırır.

//**********************************************************************

//** GİT+GİTHUB KULLANIMI
// ** Bu kodları kesinlikle öğrenmelisin,tüm yazılım algoritmasından önce bu
// ** algoritmayı öğren.
// git clone
// git add .
// git status
// git branch
// git commit -m ""
//git push
//git pull

//Bu linkleri sıra ile giderek öğren.
//1- https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15099552#overview
//2- https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15103026#overview

//**********************************************************************

//** WEBPACK NEDİR

//Webpack, JavaScript için bir modül yükleyici ve paketleyicidir.
//  Webpack, JavaScript dosyalarınızı ve diğer türlerdeki dosyaları
//  (CSS, resimler vb.) Tarayıcılar tarafından anlaşılabilir hale
//  getirmek için kullanabilirsiniz. Bu, dosyalarınızı daha küçük
//  parçalara bölerek, sadece gerektiğinde yüklemelerini sağlar ve
//  uygulamanızın performansını arttırır.

//  Webpack kullanarak bir JavaScript uygulamasını nasıl
//  paketleyebileceğinizi gösteren basit bir örnek vermek istiyorum:

//  Projenizin kök dizininde, webpack ve webpack-cli modüllerini kurun:
//  npm install webpack webpack-cli
//  Projenizin kök dizininde, bir "src" klasörü oluşturun ve içine
//  bir "index.js" dosyası ekleyin. Bu dosya uygulamanızın ana giriş
//  noktası olacak.
src / index.js;
console.log("Hello from Webpack!");

//  Projenizin kök dizininde, bir "webpack.config.js" dosyası oluşturun
//  ve içine aşağıdaki kodu ekleyin:

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

//  Projenizin kök dizininde, bir "dist" klasörü oluşturun.
//  Bu klasör, paketlenmiş dosyalarınızı içerecektir.

//  Projenizin kök dizininde, aşağıdaki komutu çalıştırın: npx webpack

//  Bu komut, webpack'i kullanarak src/index.js dosyasını dist/bundle.js
//  dosyasına paketler. Bu dosya, tarayıcınızda kullanabileceğiniz
//  bir JavaScript dosyasıdır.

//  Bu sadece webpack'in nasıl kullanılabileceğini gösteren basit bir
//  örnektir. Gerçekte, webpack'in birçok farklı yapılandırma seçeneği
//  ve eklentisi vardır, bu nedenle daha karmaşık uygulamalar
//  için daha fazla konfigürasyon gerektirebilir.

//**********************************************************************

//** SCSS NEDİR

//SCSS, Sass (Syntactically Awesome Style Sheets) ile aynı şeydir.
//  SCSS, CSS dillerinin bir genişlemesidir ve programlama kavramlarını
//  (örneğin değişkenler, döngüler, kontrol yapıları) içerebilir.
//  Bu, CSS kodunun daha okunaklı ve organize olmasını sağlar. SCSS dosyaları.
//  scss uzantısı ile kaydedilir ve sonra CSS dosyasına derlenir.
//  Evet, aşağıda bir SCSS örneği veriyorum:

//  Değişken tanımlama

// $primary-color: #4d4d4d;
// $secondary-color: #f0f0f0;

// // Kullanım
// body {
//   background-color: $primary-color;
//   color: $secondary-color;
// }

// // Nesting (Anlamlı isimlendirme)
// nav {
//   ul {
//     margin: 0;
//     padding: 0;
//     list-style: none;

//     li {
//       display: inline-block;

//       a {
//         color: $secondary-color;
//         text-decoration: none;
//       }
//     }
//   }
// }

// Bu örnekte, ilk olarak iki değişken tanımlanmıştır: $primary-color ve
// $secondary-color. Daha sonra, bu değişkenler body için arka plan rengi
//  ve yazı rengi olarak kullanılmıştır. Ayrıca, nav içinde birkaç CSS
//  kuralının anlamlı bir şekilde gruplandırılması için "nesting" yapılmıştır.
//  Bu SCSS kodu derlendiğinde, standart bir CSS dosyasına dönüşür.

//**********************************************************************
