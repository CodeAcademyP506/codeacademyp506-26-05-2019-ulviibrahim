
// 1ci mesele  nece reqemliolmasi



var reqem = prompt("Ededi daxil edin");

var dovretmek = true;

var count = 0;

if (reqem <= 9) {
    dovretmek = false;
    count = 1;
}

while (dovretmek) {
    count++;
    var qaliq = reqem % 10
    reqem = (reqem - qaliq) / 10;
    if (reqem <= 9) {
        count++;
        dovretmek = false;
    }
}


console.log("Hedlerin sayi:"+count + "-" + "dir")




//   Ucuncu mesele

var a = [12, 35, 46, 78, 95, 75, 65]

var yerdeyisme = true


while (yerdeyisme) {
    yerdeyisme = false;

    for (i = 0; i < a.length - 1; i++) {



        if (a[i] > a[i + 1]) {
  
            var max = a[i]
            a[i] = a[i + 1]

            a[i + 1] = max
            yerdeyisme = true

        }
        yerdeyisme = false
    }





}

console.log("En boyuk eded:"+" "+max+"-dir")


// Dorduncu mesele

var a = [12,3, 35, 46, 78, 95, 75, 65]

var yerdeyisme = true


while (yerdeyisme) {
    yerdeyisme = false;

    for (i = 0; i < a.length - 1; i++) {



        if (a[i] < a[i + 1]) {
  
            var min = a[i]
            a[i] = a[i + 1]

            a[i + 1] = min
            yerdeyisme = true

        }
        yerdeyisme = false
    }





}

console.log("En boyuk eded:"+" "+min+"-dir")


// Besinci Tapsiriq

 var factorial = function(x) {
    if(x== 0) {
        return 1
    } else {
        return x * factorial(x - 1);
    }
}
 
var factorial=factorial(prompt("Faktorial ucun ededi daxil edin"))
console.log(factorial);

// Altinci tapsiriq

var a = [ 5, 4, 16, 9, 1]

var yerdeyismeOlub=true

while(yerdeyismeOlub)
{
    yerdeyismeOlub=false;

    for(var i=0; i< a.length-1;i=i+1){
        if(a[i]>a[i+1]){
          var b = a[i];
          a[i]=a[i+1];
          a[i+1]=b;  
          yerdeyismeOlub=true;
        }
    yerdeyisme=false
    }


  
}
var toplam= a[i]*a[i-1]
console.log(toplam)

//  Yeddinci Mesele

var bigarray=[1,2,3,4,5,6,7,8,9]

var even=[];

var odd=[];

    for(i=0;i<bigarray.length-1;i++){

        if(bigarray[i]%2==0){
            even.push(bigarray[i])
        }
        else{
            odd.push(bigarray[i])
        }
        
    }
console.log(even,odd)