/* COS (change of service) an Existing LOB */


// Change of Service on an Existing LOB w/no Truck Trip / Office Only

let cosNTrpCable = {
  template: `
    <h2 class="section-heading">Office-Only Change of Service (COS)</h2>
    <div class="description">
      <p>In this context, an "office-only change of service" means any work order where we are making an upgrade or modification, and then completing the work order right away. This includes, but is not limited to, adding a channel package, adding a cable occurrence after a sub picked up a new receiver from the store, and balancing an existing occurrence.</p>

      <p>The reason we add this code is because every work order has to declare what type of truck is needed, and in these situations we are declaring that "no truck" is needed.</p>
    </div>

    <div class="service-codes-item has-inline-note">
      <div class="service-codes-title ">Office Only for Cable - <abbr class="inline-note-identifier">COSNTRPC</abbr></div>
      <div class="service-codes-text">LK206</div>
    </div>
    <div class="inline-note">COS = Change of Service, NTRP = No Trip, C = Cable</div>

    <div class="service-codes-item has-inline-note mt-2">
      <div class="service-codes-title">Office Only for Internet - <abbr class="inline-note-identifier" title="">COSNTRPD</abbr></div>
      <div class="service-codes-text">LK706</div>
    </div>
    <div class="inline-note">COS = Change of Service, NTRP = No Trip, D = Data</div>


    <div class="service-codes-item has-inline-note mt-2">
      <div class="service-codes-title">Office Only for Phone - <abbr class="inline-note-identifier">COSNTRPT</abbr></div>
      <div class="service-codes-text">LK906</div>
    </div>
    <div class="inline-note">COS = Change of Service, NTRP = No Trip, T = Telephone</div>
    <div class="mb-5"></div>
      `,
  notes: [],
  links: [],
}

// Change of Service on an Existing LOB w/ Truck Trip

let cosTrpCable = {
  template: `
    <h2 class="section-heading">Change of Service with Tech Install</h2>
    <div class="description">
      <p>Some examples of when a change of service (COS) with professional home visit (PHV) is needed includes when a customer needs to have a new cable outlet installed for a home office, or when an elderly or disabled customer requests to install a cable box and needs to have a technician install it for them.</p>
      <p>At this time all PHV orders must be entered by a lead or above so please check with local leadership before agreeing to set up an appointment.</p>
    </div>

    <div class="service-codes-item has-inline-note">
      <div class="service-codes-title">COS for Cable w/Truck Roll - <abbr class="inline-note-identifier">COSTRPC</abbr></div>
      <div class="service-codes-text">LK205</div>
    </div>
    <div class="inline-note">COS = Change of Service, TRP = Trip, C = Cable</div>

    <div class="service-codes-item has-inline-note mt-2">
      <div class="service-codes-title">COS for Internet w/Truck Roll - <abbr class="inline-note-identifier">COSTRPD</abbr></div>
      <div class="service-codes-text">LK702</div>
    </div>
    <div class="inline-note">COS = Change of Service, TRP = Trip, D = Data</div>

    <div class="service-codes-item has-inline-note mt-2">
      <div class="service-codes-title">COS for Phone w/Truck Roll - <abbr class="inline-note-identifier">COSTRPT</abbr></div>
      <div class="service-codes-text">LK902</div>
    </div>
    <div class="inline-note">COS = Change of Service, TRP = Trip, T = Telephone</div>

    <div class="service-codes-item mt-4 mb-5">
      <div class="service-codes-title">Additional Points, <small>if prompted</small></div>
      <div class="service-codes-text">LP001</div>
    </div>
      `,
  notes: [LP001AOPointsNote],
  links: [],
}
