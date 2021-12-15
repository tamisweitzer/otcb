

let newLOBCable = {
  template: `
    <h2 class="section-heading">Brand New Cable Service</h2>
    <div class="description">This is for a brand new customer who wants to install cable service.</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip</div>
      <div class="service-codes-text">LK200</div>
    </div>
    <div class="service-codes-item mt-2">
      <div class="service-codes-title">Points Code</div>
      <div class="service-codes-text">LP002</div>
    </div>
    <div class="service-codes-item mt-2">
      <div class="service-codes-title">A/O Points Code, <small class="service-codes-title-note">if needed</small></div>
      <div class="service-codes-text">LP001</div>
    </div>
    `,
  notes: [LP001AOPointsNote, HOW3704ProInstallOTCNote],
  links: [GEN5033WoaArticle],
}

let newLOBInternet = {
  template: `
    <h2 class="section-heading">Brand New Internet Service</h2>
    <div class="description">This is for a brand new customer who wants to install internet service.</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip, <small class="service-codes-title-note">regular or ultra speed</small></div>
      <div class="service-codes-text">LK701</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip/Activation, <small class="service-codes-title-note">gig speed</small></div>
      <div class="service-codes-text">LK745</div>
    </div>
    <div class="service-codes-item mt-2">
      <div class="service-codes-title">Points Code</div>
      <div class="service-codes-text">LP003</div>
    </div>
    <div class="service-codes-item mt-2">
      <div class="service-codes-title">Wifi Activation</div>
      <div class="service-codes-text">LK705</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Wifi Activation Camp, <small class="service-codes-title-note">if prompted</small></div>
      <div class="service-codes-text">SD711</div>
    </div>
    `,
  notes: [LP001AOPointsNote, SD711WifiActivationCampNote, HOW3704ProInstallOTCNote],
  links: [GEN5033WoaArticle],
}

let newLOBPhone = {
  template: `
    <h2 class="section-heading">Brand New Phone Service</h2>
    <div class="description">This is for a brand new customer who wants to install phone service.</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip, <small class="service-codes-title-note">regular or ultra speed</small></div>
      <div class="service-codes-text">LK901</div>
    </div>
    <div class="service-codes-item mt-2">
      <div class="service-codes-title">Points Code</div>
      <div class="service-codes-text">LP004</div>
    </div>
    <div class="section-subheading_2 mt-3">Choose Number Type</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Native TN</div>
      <div class="service-codes-text">IT003</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Ported TN</div>
      <div class="service-codes-text">IT002</div>
    </div>
    <div class="section-subheading_2 mt-4">If ported, choose one:</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Port-in Passcode</div>
      <div class="service-codes-text">NZ150</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Port-back Passcode</div>
      <div class="service-codes-text">NZ166</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">A/O Points Code, <small class="service-codes-title-note">if needed</small></div>
      <div class="service-codes-text">LP001</div>
    </div>
    `,
  notes: [LP001AOPointsNote, HOW3704ProInstallOTCNote],
  links: [GEN5033WoaArticle],
}

let newLOBCableInternet = {
  template: `
    <h2 class="section-heading">Brand New Cable and Internet Service</h2>
    <div class="description">This is for a brand new customer who wants to install cable and internet service.</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip, <small class="service-codes-title-note">regular or ultra speed</small></div>
      <div class="service-codes-text">LK200</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip/Activation, <small class="service-codes-title-note">gig speed</small></div>
      <div class="service-codes-text">LK745</div>
    </div>
    <div class="service-codes-item mt-2">
      <div class="service-codes-title">Points Code</div>
      <div class="service-codes-text">LP005</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">Wifi Activation</div>
      <div class="service-codes-text">LK705</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Wifi Activation Camp, <small class="service-codes-title-note">if prompted</small></div>
      <div class="service-codes-text">SD711</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">A/O Points Code, <small class="service-codes-title-note">if needed</small></div>
      <div class="service-codes-text">LP001</div>
    </div>
    `,
  notes: [LP001AOPointsNote, SD711WifiActivationCampNote, HOW3704ProInstallOTCNote],
  links: [GEN5033WoaArticle],
}


let newLOBCablePhone = {
  template: `
    <h2 class="section-heading">Brand New Cable and Phone Service</h2>
    <div class="description">This is for a brand new customer who wants to install cable and phone service.</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip, <small class="service-codes-title-note"></small></div>
      <div class="service-codes-text">LK200</div>
    </div>
    <div class="service-codes-item mt-2">
      <div class="service-codes-title">Points Code</div>
      <div class="service-codes-text">LP006</div>
    </div>
    <div class="section-subheading_2 mt-3">Choose Number Type</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Native TN</div>
      <div class="service-codes-text">IT003</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Ported TN</div>
      <div class="service-codes-text">IT002</div>
    </div>
    <div class="section-subheading_2 mt-4">If ported, choose one:</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Port-in Passcode</div>
      <div class="service-codes-text">NZ150</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Port-back Passcode</div>
      <div class="service-codes-text">NZ166</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">A/O Points Code, <small class="service-codes-title-note">if needed</small></div>
      <div class="service-codes-text">LP001</div>
    </div>
    `,
  notes: [LP001AOPointsNote, HOW3704ProInstallOTCNote],
  links: [GEN5033WoaArticle],
}


let newLOBInternetPhone = {
  template: `
    <h2 class="section-heading">Brand New Internet and Phone Service</h2>
    <div class="description">This is for a brand new customer who wants to install internet and phone service.</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip, <small class="service-codes-title-note">regular or ultra speed</small></div>
      <div class="service-codes-text">LK701</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip, <small class="service-codes-title-note">gig speed</small></div>
      <div class="service-codes-text">LK745</div>
    </div>
    <div class="service-codes-item mt-2">
      <div class="service-codes-title">Points Code</div>
      <div class="service-codes-text">LP007</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">Wifi Activation</div>
      <div class="service-codes-text">LK705</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Wifi Activation Camp, <small class="service-codes-title-note">if prompted</small></div>
      <div class="service-codes-text">SD711</div>
    </div>
    <div class="section-subheading_2 mt-3">Choose Number Type</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Native TN</div>
      <div class="service-codes-text">IT003</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Ported TN</div>
      <div class="service-codes-text">IT002</div>
    </div>
    <div class="section-subheading_2 mt-4">If ported, choose one:</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Port-in Passcode</div>
      <div class="service-codes-text">NZ150</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Port-back Passcode</div>
      <div class="service-codes-text">NZ166</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">A/O Points Code, <small class="service-codes-title-note">if needed</small></div>
      <div class="service-codes-text">LP001</div>
    </div>
    `,
  notes: [LP001AOPointsNote, SD711WifiActivationCampNote, HOW3704ProInstallOTCNote],
  links: [GEN5033WoaArticle],
}

let newLOBCableInternetPhone = {
  template: `
    <h2 class="section-heading">Brand New Triple Play Service</h2>
    <div class="description">This is for a brand new customer who wants to install cable, internet, and phone service.</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip, <small class="service-codes-title-note">regular or ultra speed</small></div>
      <div class="service-codes-text">LK200</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip, <small class="service-codes-title-note">gig speed</small></div>
      <div class="service-codes-text">LK745</div>
    </div>
    <div class="service-codes-item mt-2">
      <div class="service-codes-title">Points Code</div>
      <div class="service-codes-text">LP008</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">Wifi Activation</div>
      <div class="service-codes-text">LK705</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Wifi Activation Camp, <small class="service-codes-title-note">if prompted</small></div>
      <div class="service-codes-text">SD711</div>
    </div>
    <div class="section-subheading_2 mt-3">Choose Number Type</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Native TN</div>
      <div class="service-codes-text">IT003</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Ported TN</div>
      <div class="service-codes-text">IT002</div>
    </div>
    <div class="section-subheading_2 mt-4">If ported, choose one:</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Port-in Passcode</div>
      <div class="service-codes-text">NZ150</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Port-back Passcode</div>
      <div class="service-codes-text">NZ166</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">A/O Points Code, <small class="service-codes-title-note">if needed</small></div>
      <div class="service-codes-text">LP001</div>
    </div>
    `,
  notes: [LP001AOPointsNote, SD711WifiActivationCampNote, HOW3704ProInstallOTCNote],
  links: [GEN5033WoaArticle],
}
