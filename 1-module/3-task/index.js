function ucFirst(str) {
  if (str.length == 0){
    return('');
  }
  else{
    return(str.charAt(0).toUpperCase() + str.slice(1));     
  }
}
ucFirst('юлия') === 'Юлия';
ucFirst('в') === 'В';
ucFirst('') === '';