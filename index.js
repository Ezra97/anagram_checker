let str1=['c', 'i', 'n', 'e', 'm', 'a'];
let str2=['i', 'c', 'e', 'm', 'a', 'n'];
let string1 = document.getElementById('string1');
let string2 = document.getElementById('string2');
string1.innerHTML = str1.join('');
string2.innerHTML = str2.join('');

function areAnagram(str1,str2){
    let length1 = str1.length;
    let length2 = str2.length;

    if (length1 != length2){
        return false;
    }
    str1.sort();
    str2.sort();

    for (let i = 0; i < length1; i++){
        if (str1[i] != str2[i]){
            return false;
        }
    }
    return true;
}

function isanagram(){
    if (areAnagram(str1, str2)){
        document.getElementById('isanagram').innerHTML = "The 2 strings are anagrams of each other";
    }else{
        document.getElementById('isanagram').innerHTML = "The 2 strings are not anagrams of each other";
    }
}
