// Function that takes a String of text of any size and returns an Object with
// all phone numbers and emails found in the String. Exercise based on “Automate
// The Boring Stuff With Python” by Al Sweigart made to learn JS.


function phoneAndEmail(str) {
  let phone = /(1 ?)?(\d{3}(-| )?)(\d{3}(-| )?)(\d{4})/g;
  let phoneParenthesis = /(1 ?)?\((\d{3}\)(-| )?)(\d{3}(-| )?)(\d{4})/g;
  let email = /\w+@\w+\.\w+/g;
  let phoneAndEmailArr = []
		let phonesAndEmails = {phones: [], emails: []}

  if (phone.test(str)) {
    phonesAndEmails["phones"].push(str.match(phone));
  }

  if (phoneParenthesis.test(str)) {
    phonesAndEmails["phones"].push(str.match(phoneParenthesis));
  }

  if (email.test(str)) {
    phonesAndEmails["emails"].push(str.match(email));
  }

		phonesAndEmails["phones"] = phonesAndEmails["phones"].flat(1);
		phonesAndEmails["emails"] = phonesAndEmails["emails"].flat(1);
  return phonesAndEmails;
}
