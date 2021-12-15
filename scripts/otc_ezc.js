



/* EZC - SELF INSTALL MAIL OUT - CABLE */

let ezcCable = {
  template: `
    <h2 class="section-heading">Self Install Cable - Mail or Pickup</h2>
    <div class="description">Add a new LOB for cable service, or mail a new receiver for an existing cable customer.</div>

    <h3 class='section-subheading'>Adding or Upgrading Cable Service
    </h3>
    <div class="service-codes-item">
      <div class="service-codes-title">Sales Reason</div>
      <div class="service-codes-text">Self Install Ship (S7)</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Sales Reason</div>
      <div class="service-codes-text">Self Install Pickup (EZ)</div>
    </div>
    <div class="service-codes-item mt-4">
      <div class="service-codes-title">Video Kit</div>
      <div class="service-codes-text">V0107</div>
    </div>
    <div class="service-codes-item mb-4">
      <div class="service-codes-title">CableCARD Kit</div>
      <div class="service-codes-text">V0103</div>
    </div>

    <div class="section-subheading_2 mt-4">Calendar Type <small class="service-codes-title-note">Q Code / Call Code</small></div>
    <div class="service-codes-item">
      <div class="service-codes-title">Install</div>
      <div class="service-codes-text">EZC IN / SELF INSTL IN</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Upgrade</div>
      <div class="service-codes-text">EZC UP / SELF INSTL UP</div>
    </div>

    <div class="service-codes-item mt-2">
      <div class="service-codes-title">Start Bill</div>
      <div class="service-codes-text">Don't touch</div>
    </div>

    <div class="service-codes-item mt-2">
      <div class="service-codes-title">Button</div>
      <div class="service-codes-text">NO SCHEDULE</div>
    </div>

    <div class="section-subheading_2 mt-5">Self Activation Charge Code</div>
    <div class="service-codes-item mb-5">
      <div class="service-codes-title">The self activation charge of $9.99 is added automatically by the shopping cart</div>
      <div class="service-codes-text ml-3">LK286</div>
    </div>
    `,
  notes: [calendarTypeQCodeNote, ],
  links: [GEN8188SIKandCollateralArticle],
};

/* EZC - SELF INSTALL - INTERNET */

let ezcInternet = {
  template: `
    <h2 class="section-heading">Self Install Internet - Mail or Pickup</h2>
    <div class="description">
      <p>Use this to mail a modem and/or a router when a customer is adding or upgrading internet service, or is migrating from legacy to SPP and needs a new modem.</p>
      <p>For self-installation of Gig please see HOW4411.</p>
    </div>

    <h3 class='section-subheading'>Adding or Upgrading Internet Service
    </h3>

    <div class="service-codes-item">
      <div class="service-codes-title">Sales Reason</div>
      <div class="service-codes-text">Self Install Ship (S7)</div>
    </div>

    <div class="service-codes-item">
      <div class="service-codes-title">Sales Reason</div>
      <div class="service-codes-text">Self Install Pickup (EZ)</div>
    </div>

    <div class="service-codes-item mt-4">
      <div class="service-codes-title">Internet Kit</div>
      <div class="service-codes-text">D0008</div>
    </div>

    <div class="service-codes-item mt-4">
      <div class="service-codes-title">Install Modem Code <span class="service-codes-title-note">(if new service)</span></div>
      <div class="service-codes-text">INS27</div>
    </div>

    <div class="service-codes-item">
      <div class="service-codes-title">Install Modem Code <span class="service-codes-title-note">(if swapping modem)</span></div>
      <div class="service-codes-text">INS28</div>
    </div>

    <div class="service-codes-item mt-4">
      <div class="service-codes-title">Install Router <span class="service-codes-title-note">(if add wifi)</span></div>
      <div class="service-codes-text">INS30</div>
    </div>

    <div class="service-codes-item">
      <div class="service-codes-title">Wifi Activation</div>
      <div class="service-codes-text">LK705</div>
    </div>

    <div class="service-codes-item">
      <div class="service-codes-title">Wifi Activation Camp <span class="service-codes-title-note">(if prompted)</span></div>
      <div class="service-codes-text">SD711</div>
    </div>

    <div class="section-subheading_2 mt-4">Calendar Type <small class="service-codes-title-note">Q Code / Call Code</small></div>

    <div class="service-codes-item">
      <div class="service-codes-title">Install</div>
      <div class="service-codes-text">EZC IN / SELF INSTL IN</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Upgrade</div>
      <div class="service-codes-text">EZC UP / SELF INSTL UP</div>
    </div>

    <div class="service-codes-item mt-2">
      <div class="service-codes-title">Start Bill</div>
      <div class="service-codes-text">Don't touch</div>
    </div>

    <div class="service-codes-item mt-2">
      <div class="service-codes-title">Button</div>
      <div class="service-codes-text">NO SCHEDULE</div>
    </div>

    <div class="section-subheading_2 mt-4">Self Activation Charge Code</div>
    <div class="service-codes-item">
      <div class="service-codes-title">The self activation charge of $9.99 is added automatically by the shopping cart</div>
      <div class="service-codes-text ml-3">LK786</div>
    </div>

    <h3 class='section-heading mt-5'>Ship Only a Router</h3>

    <div class="service-codes-item">
      <div class="service-codes-title">Sales Reason</div>
      <div class="service-codes-text">Self Install Ship (S7)</div>
    </div>
    <div class="service-codes-item mt-1">
      <div class="service-codes-title">Wifi Self Install</div>
      <div class="service-codes-text">INS30</div>
    </div>
    <div class="service-codes-item mt-1">
      <div class="service-codes-title">Wifi Activation</div>
      <div class="service-codes-text">LK705</div>
    </div>
    <div class="service-codes-item mt-1">
      <div class="service-codes-title">Wifi Activation Camp <small class="service-codes-title-note">, if prompted</small></div>
      <div class="service-codes-text">SD711</div>
    </div>
    <div class="service-codes-item mt-1">
      <div class="service-codes-title">Calendar Type</div>
      <div class="service-codes-text">EZC UP</div>
    </div>
    <div class="service-codes-item mt-1 mb-5">
      <div class="service-codes-title">Button</div>
      <div class="service-codes-text">NO SCHEDULE</div>
    </div>

    `,
  notes: [calendarTypeQCodeNote, SD711WifiActivationCampNote],
  links: [GEN8188SIKandCollateralArticle],
};



/* EZC - SELF INSTALL - PHONE */

let ezcPhone = {
  template:  `
    <h2 class="section-heading">Self Install Phone - Mail or Pickup</h2>
    <div class="description"> Use this to mail an MTA to a customer if they are adding phone service, or if they are migrating from legacy services to SPP services and they need a new MTA</div>

    <h3 class='section-subheading'>Adding or Phone Service
    </h3>

    <div class="service-codes-item">
      <div class="service-codes-title">Sales Reason</div>
      <div class="service-codes-text">Self Install Ship (S7)</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Sales Reason</div>
      <div class="service-codes-text">Self Install Pickup (EZ)</div>
    </div>

    <div class="service-codes-item mt-4">
      <div class="service-codes-title">Mail Phone Kit (Native)</div>
      <div class="service-codes-text">T0125</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Mail Phone Kit (Ported)</div>
      <div class="service-codes-text">T0126</div>
    </div>

    <div class="section-subheading_2 mt-4">Choose Number Type</div>
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

    <div class="service-codes-item mt-4">
      <div class="service-codes-title">TN Change/Feature Change</div>
      <div class="service-codes-text">IT542</div>
    </div>

   <div class="section-subheading_2 mt-4">Calendar Type <small class="service-codes-title-note">Q Code / Call Code</small></div>

   <div class="service-codes-item">
     <div class="service-codes-title">Install</div>
     <div class="service-codes-text">EZC IN / SELF INSTL IN</div>
   </div>
   <div class="service-codes-item">
     <div class="service-codes-title">Upgrade</div>
     <div class="service-codes-text">EZC UP / SELF INSTL UP</div>
   </div>

   <div class="service-codes-item mt-2">
     <div class="service-codes-title">Start Bill</div>
     <div class="service-codes-text">Don't touch, unless TN is ported</div>
   </div>

   <div class="service-codes-item mt-2">
     <div class="service-codes-title">Button</div>
     <div class="service-codes-text">NO SCHEDULE</div>
   </div>

   <div class="section-subheading_2 mt-4">Self Activation Charge Code</div>
   <div class="service-codes-item mb-5">
     <div class="service-codes-title">The self activation charge of $9.99 is added automatically by the shopping cart</div>
     <div class="service-codes-text ml-3">LK986</div>
   </div>
    `,
  notes: [calendarTypeQCodeNote, INS28ModemSwapNote, NZ150PortInNote, NZ166PortBackNote, tnNumberChangeNote, eMTANote],
  links: [GEN8188SIKandCollateralArticle, GEN6880PortCarrierReqsArticle, ],
};



/* EZC - Double Play  */
let ezcCableInternet = {
  template: `
  <h2 class="section-heading">Self Install Cable & Internet - Mail or Pickup</h2>
  <div class="description">
    <p>Add new cable and internet service.</p>
    <p>For self-installation of Gig please see HOW4411.</p>
  </div>

  <h3 class='section-subheading'>Adding New Cable and Internet Service
  </h3>

  <div class="service-codes-item">
    <div class="service-codes-title">Sales Reason</div>
    <div class="service-codes-text">Self Install Ship (S7)</div>
  </div>
  <div class="service-codes-item">
    <div class="service-codes-title">Sales Reason</div>
    <div class="service-codes-text">Self Install Pickup (EZ)</div>
  </div>

  <div class="service-codes-item mt-4">
    <div class="service-codes-title">Video Kit</div>
    <div class="service-codes-text">V0107</div>
  </div>
  <div class="service-codes-item mb-4">
    <div class="service-codes-title">CableCARD Kit</div>
    <div class="service-codes-text">V0103</div>
  </div>

  <div class="service-codes-item mt-4">
    <div class="service-codes-title">Internet Kit</div>
    <div class="service-codes-text">D0008</div>
  </div>

  <div class="service-codes-item mt-4">
    <div class="service-codes-title">Install Modem Code</div>
    <div class="service-codes-text">INS27</div>
  </div>

  <div class="service-codes-item mt-4">
    <div class="service-codes-title">Install Router <span class="service-codes-title-note">(if add wifi)</span></div>
    <div class="service-codes-text">INS30</div>
  </div>

  <div class="service-codes-item">
    <div class="service-codes-title">Wifi Activation</div>
    <div class="service-codes-text">LK705</div>
  </div>

  <div class="service-codes-item">
    <div class="service-codes-title">Wifi Activation Campaign <span class="service-codes-title-note">(if prompted)</span></div>
    <div class="service-codes-text">SD711</div>
  </div>

  <div class="section-subheading_2 mt-4">Calendar Type <small class="service-codes-title-note">Q Code / Call Code</small></div>

  <div class="service-codes-item">
    <div class="service-codes-title">Install</div>
    <div class="service-codes-text">EZC IN / SELF INSTL IN</div>
  </div>
  <div class="service-codes-item">
    <div class="service-codes-title">Upgrade</div>
    <div class="service-codes-text">EZC UP / SELF INSTL UP</div>
  </div>

  <div class="service-codes-item mt-2">
    <div class="service-codes-title">Start Bill</div>
    <div class="service-codes-text">Don't touch</div>
  </div>

  <div class="service-codes-item mt-2">
    <div class="service-codes-title">Button</div>
    <div class="service-codes-text">NO SCHEDULE</div>
  </div>

  <div class="section-subheading_2 mt-5">Self Activation Charge Code</div>
  <div class="service-codes-item mb-5">
    <div class="service-codes-title">The self activation charge of $9.99 is added automatically by the shopping cart</div>
    <div class="service-codes-text ml-3">LK286</div>
  </div>
    `,
  notes: [calendarTypeQCodeNote, SD711WifiActivationCampNote],
  links: [GEN8188SIKandCollateralArticle],
}

let ezcCablePhone = {
  template: `
  <h2 class="section-heading">Self Install Cable and Phone - Mail or Pickup</h2>
  <div class="description">
    <p>Add a new LOB for cable service and phone.</p>
  </div>

  <h3 class='section-subheading'>Adding new Cable and Phone Service
  </h3>

  <div class="service-codes-item">
    <div class="service-codes-title">Sales Reason</div>
    <div class="service-codes-text">Self Install Ship (S7)</div>
  </div>
  <div class="service-codes-item">
    <div class="service-codes-title">Sales Reason</div>
    <div class="service-codes-text">Self Install Pickup (EZ)</div>
  </div>

  <div class="service-codes-item mt-4">
    <div class="service-codes-title">Video Kit</div>
    <div class="service-codes-text">V0107</div>
  </div>
  <div class="service-codes-item mb-4">
    <div class="service-codes-title">CableCARD Kit</div>
    <div class="service-codes-text">V0103</div>
  </div>

  <div class="service-codes-item mt-4">
    <div class="service-codes-title">Mail Phone Kit (Native)</div>
    <div class="service-codes-text">T0125</div>
  </div>
  <div class="service-codes-item">
    <div class="service-codes-title">Mail Phone Kit (Ported)</div>
    <div class="service-codes-text">T0126</div>
  </div>

  <div class="section-subheading_2 mt-4">Choose Number Type</div>
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

  <div class="service-codes-item mt-4">
    <div class="service-codes-title">TN Change/Feature Change</div>
    <div class="service-codes-text">IT542</div>
  </div>

  <div class="section-subheading_2 mt-4">Calendar Type <small class="service-codes-title-note">Q Code / Call Code</small></div>

  <div class="service-codes-item">
    <div class="service-codes-title">Install</div>
    <div class="service-codes-text">EZC IN / SELF INSTL IN</div>
  </div>
  <div class="service-codes-item">
    <div class="service-codes-title">Upgrade</div>
    <div class="service-codes-text">EZC UP / SELF INSTL UP</div>
  </div>

  <div class="service-codes-item mt-2">
    <div class="service-codes-title">Start Bill</div>
    <div class="service-codes-text">Don't touch, unless TN is ported</div>
  </div>

  <div class="service-codes-item mt-2">
    <div class="service-codes-title">Button</div>
    <div class="service-codes-text">NO SCHEDULE</div>
  </div>

  <div class="section-subheading_2 mt-5">Self Activation Charge Code</div>

  <div class="service-codes-item mb-5">
    <div class="service-codes-title">The self activation charge of $9.99 is added automatically by the shopping cart</div>
    <div class="service-codes-text ml-3">LK286</div>
  </div>  `,
  notes: [calendarTypeQCodeNote, INS28ModemSwapNote, NZ150PortInNote, NZ166PortBackNote, tnNumberChangeNote, eMTANote ],
  links: [GEN8188SIKandCollateralArticle, GEN6880PortCarrierReqsArticle],
}

let ezcInternetPhone = {
  template: `
  <h2 class="section-heading">Self Install Internet and Phone- Mail or Pickup</h2>
  <div class="description">
    <p>Use this to mail an MTA and router when a customer is adding internet and phone service.</p>
    <p>For self-installation of Gig please see HOW4411.</p>
  </div>

  <h3 class='section-subheading'>Adding Internet and Phone Service
  </h3>

  <div class="service-codes-item">
    <div class="service-codes-title">Sales Reason</div>
    <div class="service-codes-text">Self Install Ship (S7)</div>
  </div>

  <div class="service-codes-item">
    <div class="service-codes-title">Sales Reason</div>
    <div class="service-codes-text">Self Install Pickup (EZ)</div>
  </div>

  <div class="service-codes-item mt-4">
    <div class="service-codes-title">Internet Kit</div>
    <div class="service-codes-text">D0008</div>
  </div>

  <div class="service-codes-item mt-4">
    <div class="service-codes-title">Install Modem Code <span class="service-codes-title-note">(if new service)</span></div>
    <div class="service-codes-text">INS27</div>
  </div>

  <div class="service-codes-item">
    <div class="service-codes-title">Install Modem Code <span class="service-codes-title-note">(if swapping modem)</span></div>
    <div class="service-codes-text">INS28</div>
  </div>

  <div class="service-codes-item mt-4">
    <div class="service-codes-title">Install Router <span class="service-codes-title-note">(if add wifi)</span></div>
    <div class="service-codes-text">INS30</div>
  </div>

  <div class="service-codes-item">
    <div class="service-codes-title">Wifi Activation</div>
    <div class="service-codes-text">LK705</div>
  </div>

  <div class="service-codes-item">
    <div class="service-codes-title">Wifi Activation Camp <span class="service-codes-title-note">(if prompted)</span></div>
    <div class="service-codes-text">SD711</div>
  </div>

  <div class="service-codes-item mt-4">
    <div class="service-codes-title">Mail Phone Kit (Native)</div>
    <div class="service-codes-text">T0125</div>
  </div>
  <div class="service-codes-item">
    <div class="service-codes-title">Mail Phone Kit (Ported)</div>
    <div class="service-codes-text">T0126</div>
  </div>

  <div class="section-subheading_2 mt-4">Choose Number Type</div>
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

  <div class="service-codes-item mt-4">
    <div class="service-codes-title">TN Change/Feature Change</div>
    <div class="service-codes-text">IT542</div>
  </div>

  <div class="section-subheading_2 mt-4">Calendar Type <small class="service-codes-title-note">Q Code / Call Code</small></div>
  <div class="service-codes-item">
    <div class="service-codes-title">Install</div>
    <div class="service-codes-text">EZC IN / SELF INSTL IN</div>
  </div>
  <div class="service-codes-item">
    <div class="service-codes-title">Upgrade</div>
    <div class="service-codes-text">EZC UP / SELF INSTL UP</div>
  </div>

  <div class="service-codes-item mt-2">
    <div class="service-codes-title">Start Bill</div>
    <div class="service-codes-text">Don't touch</div>
  </div>

  <div class="service-codes-item mt-2">
    <div class="service-codes-title">Button</div>
    <div class="service-codes-text">NO SCHEDULE</div>
  </div>

  <div class="section-subheading_2 mt-4">Self Activation Charge Code</div>
  <div class="service-codes-item mb-5">
    <div class="service-codes-title">The self activation charge of $9.99 is added automatically by the shopping cart</div>
    <div class="service-codes-text ml-3">LK786</div>
  </div> `,
  notes: [calendarTypeQCodeNote, SD711WifiActivationCampNote, INS28ModemSwapNote, NZ150PortInNote, NZ166PortBackNote, tnNumberChangeNote, eMTANote],
  links: [GEN8188SIKandCollateralArticle, GEN6880PortCarrierReqsArticle, ],
}

// Triple Play Self Install
let ezcCableInternetPhone = {
  template: `
    <h2 class="section-heading">Self Install Triple Play - Mail or Pickup</h2>
    <div class="description">
      <p>Add new cable and internet service.</p>
      <p>For self-installation of Gig please see HOW4411.</p>
    </div>

    <h3 class='section-subheading'>Adding New Cable and Internet Service
    </h3>

    <div class="service-codes-item">
      <div class="service-codes-title">Sales Reason</div>
      <div class="service-codes-text">Self Install Ship (S7)</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Sales Reason</div>
      <div class="service-codes-text">Self Install Pickup (EZ)</div>
    </div>

    <div class="service-codes-item mt-4">
      <div class="service-codes-title">Video Kit</div>
      <div class="service-codes-text">V0107</div>
    </div>
    <div class="service-codes-item mb-4">
      <div class="service-codes-title">CableCARD Kit</div>
      <div class="service-codes-text">V0103</div>
    </div>

    <div class="service-codes-item mt-4">
      <div class="service-codes-title">Internet Kit</div>
      <div class="service-codes-text">D0008</div>
    </div>

    <div class="service-codes-item mt-4">
      <div class="service-codes-title">Install Modem Code</div>
      <div class="service-codes-text">INS27</div>
    </div>

    <div class="service-codes-item mt-4">
      <div class="service-codes-title">Install Router <span class="service-codes-title-note">(if add wifi)</span></div>
      <div class="service-codes-text">INS30</div>
    </div>

    <div class="service-codes-item">
      <div class="service-codes-title">Wifi Activation</div>
      <div class="service-codes-text">LK705</div>
    </div>

    <div class="service-codes-item">
      <div class="service-codes-title">Wifi Activation Campaign <span class="service-codes-title-note">(if prompted)</span></div>
      <div class="service-codes-text">SD711</div>
    </div>

    <div class="service-codes-item mt-4">
      <div class="service-codes-title">Mail Phone Kit (Native)</div>
      <div class="service-codes-text">T0125</div>
    </div>
    <div class="service-codes-item">
      <div class="service-codes-title">Mail Phone Kit (Ported)</div>
      <div class="service-codes-text">T0126</div>
    </div>

    <div class="section-subheading_2 mt-4">Choose Number Type</div>
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

    <div class="section-subheading_2 mt-4">Calendar Type <small class="service-codes-title-note">Q Code / Call Code</small></div>

    <div class="service-codes-item">
      <div class="service-codes-title">Install</div>
      <div class="service-codes-text">EZC IN / SELF INSTL IN</div>
    </div>

    <div class="service-codes-item mt-2">
      <div class="service-codes-title">Start Bill</div>
      <div class="service-codes-text">Don't touch</div>
    </div>

    <div class="service-codes-item mt-2">
      <div class="service-codes-title">Button</div>
      <div class="service-codes-text">NO SCHEDULE</div>
    </div>

    <div class="section-subheading_2 mt-5">Self Activation Charge Code</div>

    <div class="service-codes-item mb-5">
      <div class="service-codes-title">The self activation charge of $9.99 is added automatically by the shopping cart</div>
      <div class="service-codes-text ml-3">LK286</div>
    </div> `,
  notes: [calendarTypeQCodeNote, SD711WifiActivationCampNote, INS28ModemSwapNote, NZ150PortInNote, NZ166PortBackNote, tnNumberChangeNote, eMTANote],
  links: [GEN8188SIKandCollateralArticle, GEN6880PortCarrierReqsArticle],
}


let ezcMailRemote = {
  template: `
  <h2 class="section-heading">Remote Control Mail Out</h2>
  <div>Remote controls and other ancillary options are ordered via the UCM process.</div>
  <div class="mt-4 mb-5">
    <a href="https://issuetrak.twcable.com/SPA/#/issue/customer/find" class="btn btn-primary btn-lg">Go to the UCM tool</a>
  </div>
       `,
  notes: [calendarTypeQCodeNote, ],
  links: [HOW5129AncillaryProcessArticle, GEN8188SIKandCollateralArticle],
}

let ezcEmptyCarton = {
  template: `
  <h2 class="section-heading">Mail an Empty Box for Return of Equipment</h2>
  <div>Return Kits and other ancillary options are ordered via the UCM process.</div>
  <div class="mt-4 mb-5">
    <a href="https://issuetrak.twcable.com/SPA/#/issue/customer/find" class="btn btn-primary btn-lg">Go to the UCM tool</a>
  </div> `,
  notes: [calendarTypeQCodeNote, ],
  links: [HOW5129AncillaryProcessArticle, GEN8188SIKandCollateralArticle, HOW4060ProcessingEquipmentReturns],
}

let ezcSIKResearch = {
  template: `
    <h2 class="section-heading">SIK Equipment Research</h2>
    <p>Put in an equipment research ticket if our records show that a self-install kit was delivered, and the equipment is listed in CRM's equipment screen, but the customer does not have it.</p>
    <p>Once the UCM ticket is submitted you can then give the customer the option of either going to the store to pick up equipment, or scheduling a rescue service call.</p>
    <div></div>
    <p><a href="https://charterukm.custhelp.com/app/answers/answer_view/a_id/1018635" target="_blank">GEN8188 - Self-Installation Equipment Escalation and Research</a></p> `,
  notes: [],
  links: [GEN8188SIKandCollateralArticle, HOW3968UCMBillingProcessesArticle],
}



/**** Equipment Swap *****/

let ezcLLSwapMailOut = {
  template: `
    <h2 class="section-heading">Like for Like (LL) Equipment Swap - Mail Out</h2>
    <div class="description">A like-for-like cable swap is intended to be used when we know the box is dead or damaged and needs to be replaced. This should not be used if the customer reports pixilation or other service issues.</div>
    <h3 class='section-subheading'>Swap a Cable Box in CRM</h3>
    <div>
      <ol class="line-height-18">
        <li>Sales Reason: Like for Like Swap(LL)</li>
        <li class="strikethrough muted">Copy and Increment the occurrence that needs to be swapped</li>
        <li>Add OTCS: V0107 +
          <ul>
            <li>INS44 if swapping a STB</li>
            <li>INS46 if swapping a DVR</li>
          </ul>
        </li>
        <li>Campaign to waive shipping fee: SD301 *<br><small class="text-secondary">* Note: This camp may be missing in BHN</small></li>
        <li>Calendar Type: SWAPS&REMOTES</li>
        <li>NO SCHEDULE</li>
      </ol>
    </div>
    <h3 class='section-subheading'>Swap a Cable Box in ICOMS</h3>
    <div>
      <ol class="line-height-18">
        <li>Task 66</li>
        <li>Call Code/Q Code: 26 (SWAPS&REMOTES)</li>
        <li>Sales Reason: LL</li>
        <li>Campaign to waive shipping fee: SD301 *<br><small class="text-secondary">* Note: This camp is often missing in BHN</small></li>
        <li class="strikethrough muted">In Task 36 copy and increment the occurrence that needs to be swapped</li>
        <li>Add OTCS: V0107 +
          <ul>
            <li>INS44 if swapping a STB</li>
            <li>INS46 if swapping a DVR</li>
            </ul>
        </li>
        <li>NO SCHEDULE</li>
      </ol>
    </div>

    <h3 class='section-subheading'>Swap a Cable Modem or Router</h3>
    <div>See the Like for Like Swap process in HOW4411.</div>
    `,
  notes: [calendarTypeQCodeNote, ],
  links: [HOW5134NonCompliantModemSwapArticle, GEN8188SIKandCollateralArticle, HOW4060ProcessingEquipmentReturns, COM865Docsis31Swap],
}

let ezcLLSwapPickUp = {
  template: `
    <h2 class="section-heading">Like for Like (LL) Equipment Swap - Store Pick Up</h2>
    <div class="mt-3 mb-5"><p>See the <b>Video Equipment Swap</b> section in the CoPilot article HOW4411.</p><p>This article tells us to <em>not</em> key in a work order because that will ship unnecessary equipment to the customer.</p></div>`,
  notes: [],
  links: [HOW5134NonCompliantModemSwapArticle, GEN8188SIKandCollateralArticle, HOW4060ProcessingEquipmentReturns, COM865Docsis31Swap],
}

let ezcNonCompliantModemSwap = {
  template: `
    <h2 class="section-heading">Non-Compliant Modem Swap</h2>

    <div class="description">
      <p>We perform a non-compliant modem swap when we identify a customer who has a modem that is no longer capable of handling the current internet speed. This can happen from a recent <a href="https://charterukm.custhelp.com/app/answers/answer_view/a_id/1012311/loc/en_US" target="_blank">speed lift</a> or from a recent upgrade that was pushed through in spite of us having the wrong equipment on the account.</p>
      <p>This process can be confusing. When in doubt, refer to the CoPilot article,
      <a href="https://charterukm.custhelp.com/app/answers/answer_view/a_id/1014474/loc/en_US#__highlight" target="_blank">Swapping Non-Compliant Modems - HOW5134</a>.</p>
      <p>Compare this with the Like for Like Modem swap process found in <a href="https://charterukm.custhelp.com/app/answers/answer_view/a_id/1012354" target="_blank">HOW4411 Self-Installation Order Entry</a></p>
    </div>

    <div class="mt-1 text-secondary">
    </div>

    <div class="otcList-subheading mt-5 text-primary">Sales Reason</div>

    <div class="otcList-flex-container">
      <div class="otcList-flex-col-1">Mail Out</div>
      <div class="otcList-flex-col-2">SELF INSTALL SHIP (S7)</div>
    </div>
    <div class="otcList-flex-container">
      <div class="otcList-flex-col-1">Store Pickup</div>
      <div class="otcList-flex-col-2">SELF INSTALL PU (EZ)</div>
    </div>
    <div class="otcList-flex-container">
      <div class="otcList-flex-col-1 strikethrough muted">Non-NextGen Areas</div>
      <div class="otcList-flex-col-2 strikethrough muted">NONCOMPLIANT MODEM SWAP (PX)</div>
    </div>


    <div class="otcList-flex-container mt-4">
      <div class="otcList-flex-col-1">CompSWPMDM</div>
      <div class="otcList-flex-col-2">HZ340</div>
    </div>
    <div class="otcList-flex-container">
      <div class="otcList-flex-col-1">Internet Box Kit</div>
      <div class="otcList-flex-col-2">D0008</div>
    </div>
    <div class="otcList-flex-container">
      <div class="otcList-flex-col-1">Swap Modem</div>
      <div class="otcList-flex-col-2">INS28</div>
    </div>

    <div class="otcList-flex-container mt-4">
      <div class="otcList-flex-col-1">Store Pickup</div>
      <div class="otcList-flex-col-2">ID363</div>
    </div>

    <div class="otcList-flex-container mt-4">
      <div class="otcList-flex-col-1">Shipping Fee</div>
      <div class="otcList-flex-col-2 ml-3">LK786</div>
    </div>
    <div class="otcList-flex-container">
      <div class="otcList-flex-col-1">Free Shipping Campaign</div>
      <div class="otcList-flex-col-2">SD812</div>
    </div>

    <div class="otcList-flex-container mt-4">
      <div class="otcList-flex-col-1">Calendar Type <small>(Q Code/Call Code)</small></div>
      <div class="otcList-flex-col-2">EZC UP</div>
    </div>
    <div class="otcList-flex-container">
      <div class="otcList-flex-col-1">Button</div>
      <div class="otcList-flex-col-2">NO SCHEDULE</div>
    </div>
    `,
  notes: [],
  links: [HOW5134NonCompliantModemSwapArticle, GEN8188SIKandCollateralArticle, HOW4060ProcessingEquipmentReturns, COM865Docsis31Swap],
}





/* Inline note template */
/*
  <div class="service-codes-item has-inline-note mt-4">
    <div class="service-codes-title ">XXX</div>
    <div class="service-codes-text">YYY</div>
  </div>
  <div class="inline-note hide mb-3 text-muted font-italic">
   lorem ipsum</div>
*/
