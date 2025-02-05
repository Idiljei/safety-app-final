// Texting Safety Network Live Location 
export const smsLocation = async() => {
  // e.preventDefault();
  const body = { "message": "Jess has sent her live location through Assure" }
  await fetch('/sms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  })
  .then(res =>  res.json())
  .catch(err => console.log(err))

}

export const callPolice = async(e) => {

  await fetch('/sms/call', {
    method: 'POST',
  })
  .then(res => res.json())
  .catch(err => console.log(err))
};

// Texting Police 
export const smsPolice = async(e) => {
  // e.preventDefault();
  const body = { "message": "CALLING 911" }
  await fetch('/sms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  })
  .then(res =>  res.json())
  .catch(err => console.log(err))
}


// SAFENOW text to Safetey Network  
export const smsSafeNow = async(e) => {
  // e.preventDefault();
  const body = { "message": "Safe now! Thanks for following my location status" }
  await fetch('/sms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  })
  .then(res =>  res.json())
  .catch(err => console.log(err))
}


export const smsCheckin = async(e) => {
  // e.preventDefault();
  const body = { "message": "Hey are you okay? I got your notification from assure! I'm watching you on the map, let me know if you're okay" }
  await fetch('/sms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  })
  .then(res =>  res.json())
  .catch(err => console.log(err))
}