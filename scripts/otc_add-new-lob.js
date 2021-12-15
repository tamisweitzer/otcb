/* Add New LOB */

let addNewLOBSelfInstall = {
  template: `
    <h2 class="section-heading">Add New Service w/Self Install</h2>
    <p class="mx-5 my-5 border border-danger text-danger text-larger p-5">If you are adding a new line of a business as a self-install please use the OTCs in the <b>Self Install</b> section.</p>
      `,
  notes: [],
  links: [],
}

let addNewLOBCable = {
  template: `
    <h2 class="section-heading">Add New Cable Service</h2>
    <div class="description">This is for an existing internet or phone customer who wants to add cable service.</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip</div>
      <div class="service-codes-text">LK205</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip Campaign, <small class="service-codes-title-note">if prompted</small></div>
      <div class="service-codes-text">SD205</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">Points Code</div>
      <div class="service-codes-text">LP302</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">A/O Points Code, <small class="service-codes-title-note">if needed</small></div>
      <div class="service-codes-text">LP001</div>
    </div>`,
  notes: [calendarTypeQCodeNote, LP001AOPointsNote, HOW3704ProInstallOTCNote],
  links: [GEN5033WoaArticle],
}

let addNewLOBInternet = {
  template: `
    <h2 class="section-heading">Add New Internet Service</h2>
    <div class="description">This is for an existing cable or phone customer who wants to add internet service.</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip, <small class="service-codes-title-note">regular or ultra speed</small></div>
      <div class="service-codes-text">LK702</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip/Activation, <small class="service-codes-title-note">gig speed</small></div>
      <div class="service-codes-text">LK745</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">Points Code</div>
      <div class="service-codes-text">LP303</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">Wifi Activation</div>
      <div class="service-codes-text">LK705</div>
    </div>
    <div class="service-codes-item pb-5">
      <div class="service-codes-title">Wifi Actv Camp, <small class="service-codes-title-note">see Notes & References</small></div>
      <div class="service-codes-text">SD711</div>
    </div>
      `,
  notes: [calendarTypeQCodeNote, SD711WifiActivationCampNote, LP001AOPointsNote, HOW3704ProInstallOTCNote],
  links: [GEN5033WoaArticle],
}

let addNewLOBPhone = {
  template: `
    <h2 class="section-heading">Add New Phone Service</h2>
    <div class="description">This is for an existing cable or internet customer who wants to add phone service</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip, <small class="service-codes-title-note">Unlimited Voice</small></div>
      <div class="service-codes-text">LK902</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">Points Code</div>
      <div class="service-codes-text">LP304</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">A/O Points Code, <small class="service-codes-title-note">if needed</small></div>
      <div class="service-codes-text">LP001</div>
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
    <div class="service-codes-item pb-5">
      <div class="service-codes-title">Port-back Passcode</div>
      <div class="service-codes-text">NZ166</div>
    </div>

      `,
  notes: [calendarTypeQCodeNote, LP001AOPointsNote, NZ150PortInNote, NZ166PortBackNote, tnNumberChangeNote, HOW3704ProInstallOTCNote],
  links: [GEN5033WoaArticle, GEN6880PortCarrierReqsArticle],
}

let addNewLOBCableInternet = {
  template: `
    <h2 class="section-heading">Add New Cable & Internet Service</h2>
    <div class="description">This is for an existing phone customer who wants to add cable and internet service</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip, <small class="service-codes-title-note">regular or ultra speed</small></div>
      <div class="service-codes-text">LK205</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip/Activation, <small class="service-codes-title-note">gig speed</small></div>
      <div class="service-codes-text">LK745</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip Campaign, <small class="service-codes-title-note">if prompted</small></div>
      <div class="service-codes-text">SD205</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">Points Code</div>
      <div class="service-codes-text">LP305</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">Wifi Activation</div>
      <div class="service-codes-text">LK705</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Wifi Actv Camp, <small class="service-codes-title-note">see Notes & References</small></div>
      <div class="service-codes-text">SD711</div>
    </div>
    <div class="service-codes-item mt-3 pb-5">
      <div class="service-codes-title">A/O Points Code, <small class="service-codes-title-note">if needed</small></div>
      <div class="service-codes-text">LP001</div>
    </div>
      `,
  notes: [calendarTypeQCodeNote, SD711WifiActivationCampNote, LP001AOPointsNote, HOW3704ProInstallOTCNote],
  links: [GEN5033WoaArticle],
}

let addNewLOBCablePhone = {
  template: `
    <h2 class="section-heading">Add New Cable & Phone Service</h2>
    <div class="description">This is for an existing internet customer who wants to add cable and phone service</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip</div>
      <div class="service-codes-text">LK205</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip Campaign, <small class="service-codes-title-note">if prompted</small></div>
      <div class="service-codes-text">SD205</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">Points Code</div>
      <div class="service-codes-text">LP306</div>
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

    <div class="section-subheading_2 mt-3">If ported, choose one:</div>
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
  notes: [calendarTypeQCodeNote, LP001AOPointsNote, NZ150PortInNote, NZ166PortBackNote, tnNumberChangeNote, HOW3704ProInstallOTCNote],
  links: [GEN5033WoaArticle, GEN6880PortCarrierReqsArticle],
}

let addNewLOBInternetPhone = {
  template: `
    <h2 class="section-heading">Add New Internet & Phone Service</h2>
    <div class="description">This is for an existing cable customer who wants to add internet and phone service</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip, <small class="service-codes-title-note">regular or ultra speed</small></div>
      <div class="service-codes-text">LK702</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Truck Trip/Activation, <small class="service-codes-title-note">gig speed</small></div>
      <div class="service-codes-text">LK745</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">Points Code</div>
      <div class="service-codes-text">LP307</div>
    </div>
    <div class="service-codes-item mt-3">
      <div class="service-codes-title">Wifi Activation</div>
      <div class="service-codes-text">LK705</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Wifi Actv Camp, <small class="service-codes-title-note">see Notes & References</small></div>
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

    <div class="section-subheading_2 mt-3">If ported, choose one:</div>
    <div class="service-codes-item">
      <div class="service-codes-title">Port-in Passcode</div>
      <div class="service-codes-text">NZ150</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Port-back Passcode</div>
      <div class="service-codes-text">NZ166</div>
    </div>
    <div class="service-codes-item mt-3 pb-5">
      <div class="service-codes-title">A/O Points Code, <small class="service-codes-title-note">if needed</small></div>
      <div class="service-codes-text">LP001</div>
    </div>
      `,
  notes: [calendarTypeQCodeNote, SD711WifiActivationCampNote, LP001AOPointsNote, NZ150PortInNote, NZ166PortBackNote, tnNumberChangeNote, HOW3704ProInstallOTCNote ],
  links: [GEN5033WoaArticle, GEN6880PortCarrierReqsArticle],
}
