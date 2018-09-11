function reverseStr(str) {
    str = str.split('');
    str = str.reverse('');
    str = str.join('');

    return str;
}

console.log(reverseStr("Hello!"));