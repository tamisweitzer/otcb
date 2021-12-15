


let generalSROCodes = {
  template: `
    <h2 class="section-heading">General SRO Codes</h2>
    <div class="description">Please note many of these codes are no longer showing available to the lead team and some job types, such as ped repair, are now listed as a TC, per HOW6135.</div>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>X5</td>
          <td>Noise No Filter (NOI NOFLTR)</td>
        </tr>
        <tr>
          <td>X7</td>
          <td>Down drop repair at address with no active service</td>
        </tr>
        <tr>
          <td>UU</td>
          <td>CLI No Filter (CLI NOFLTR)</td>
        </tr>
        <tr>
          <td>YL</td>
          <td>CLI Filter (CLI FLTR)</td>
        </tr>
        <tr>
          <td>YM</td>
          <td>Noise Filter(NOI FLTR)</td>
        </tr>
        <tr>
          <td>Y3</td>
          <td>	Refer to Installer (REF2INST)</td>
        </tr>
        <tr>
          <td>WX</td>
          <td>Equip Pick Up</td>
        </tr>
        </tbody>
      </table>
        <p></p>If you need a ped work or drop rehang done, please see HOW6135 to see if it qualifies as a TC now.
    </div>
      `,
  notes: [],
  links: [HOW6619EnteringETDTicketArticle, GEN2941SROReasonCodesArticle, GEN2509FieldOpSROsArticle, HOW6135TCSchedulingArticle],
}

let downDropProcess = {
  template: `
    <h2 class="section-heading">Line Down/Low Hanging Line Process</h2>
    <div class="description"></div>

    <div class="downdrops">
      <ol>
        <li>Is the line down service impacting?
          <ul>
            <li>Yes - Doesn't matter. Go to Step 2.</li>
            <li>No - Doesn't matter. Go to Step 2.</li>
          </ul>
        </li>
        <li>Does the address exist in the CRM/Agent OS?
          <ul>
            <li>Yes - Go to step 3</li>
            <li>No - Submit a hazard ETD using the <span>CREATE MANUAL ISSUE</span> link in UCM</li>
          </ul>
        </li>

        <li>Does the address have active service?
          <ul>
            <li>Yes - Go to step 4</li>
            <li>No -  Submit a hazard ETD using the <span>CREATE MANUAL ISSUE</span> link in UCM</li>
          </ul>
        </li>

        <li>Is the line down a hazard?
          <ul>
            <li>Yes - Set up a TC using <span>.B - D/LOWDROP</span> and then submit an ETD using reason <span>MustDo: Hazard/Safety Situation</span></li>
            <li>No - Go to step 5</li>
          </ul>
        </li>

        <li>Set up a TC using <span>.B - D/LOWDROP</span> </li>
      </ol>
    </div><!-- /.downdrops -->
    <div></div>
      `,
  notes: [],
  links: [HOW6619EnteringETDTicketArticle, HOW6135TCSchedulingArticle],
}

let equipmentPickUp = {
  template: `
    <h2 class="section-heading">Equipment Pickup - Voluntary Disconnect</h2>
    <div class="description"></div>
    <div>
      <p>Equipment return options on a voluntary disconnect:<ol><li>The UPS Store</li><li>Spectrum Store</li><li>Home Shipment Return Kit</li><li>SRO for Pickup</li></ol></p><p class='w-100'>An SRO to pickup equipment before a customer voluntarily disconnects their account is only available if the customer has cable equipment, and is unable to use one of the first three options due to being elderly or disabled. Please read the CoPilot article carefully and reach out to a Lead or higher for assistance, if your customer qualifies for this option.</p><p></p>
    </div>
      `,
  notes: [],
  links: [HOW6135TCSchedulingArticle],
}

let signalLeakage = {
  template: `
    <h2 class="section-heading">Signal Leakage Process</h2>
    <div class="description"></div>

    <div class="pb-5">For signal leak handling see the Related Links to the right.</div>

      `,
  notes: [],
  links: [HOW6619EnteringETDTicketArticle, GEN5042SignalLeakageArticle, GEN2941SROReasonCodesArticle, GEN2509FieldOpSROsArticle, HOW6135TCSchedulingArticle, GEN6317DoorTagsArticle],
}
