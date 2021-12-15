$(document).ready(function () {
  var btnToggler = document.getElementsByClassName("btn-toggler");
  var orderTypeBtn = document.getElementsByClassName("order-type-btn");
  var hasInlineNote = document.getElementsByClassName("has-inline-note");
  var inlineNote = document.getElementsByClassName("inline-note");
  var selectedItemOutput = document.querySelector("#selectedItemOutput");
  var selectedItemNotes = document.querySelector("#selectedItemNotes");
  var selectedItemLinks = document.querySelector("#selectedItemLinks");
  var defaultLinksDiv = document.querySelector('#defaultLinksDiv');

  $(orderTypeBtn).on("click", function () {
    !$(this).next("ul").slideToggle("hide");
  });

  function setTargetBlank() {
    // Add blank target to all external links
    $(document.links)
      .filter(function () {
        return this.hostname != window.location.hostname;
      })
      .attr("target", "_blank");
  }

  function loadDefaultArticles() {
    $(defaultLinksDiv).html(defaultEZCArticles.links).addClass('default-links-div');
    $(defaultTechOTCArticlesDiv).html(defaultTechOTCArticles.links).addClass('default-links-div');
    $(defaultServiceCodeArticlesDiv).html(defaultServiceCodeArticles.links).addClass('default-links-div');
    $(defaultBOTMarketArticlesDiv).html(defaultBOTMarketArticles.links).addClass('default-links-div');
    $(defaultCSGArticlesDiv).html(defaultCSGArticles.links).addClass('default-links-div');
  }


  // Displays Selected Item, Notes, and Links
  $("li").on("click", function () {
    var id = $(this).attr("id");

    loadDefaultArticles();
    // /***** Self Install Orders - All Types *****/

    if (id === "ezcCable") {
      clearAll();
      $(selectedItemOutput).html(ezcCable.template);
      $(selectedItemNotes).html(ezcCable.notes);
      $(selectedItemLinks).html(ezcCable.links);

      setTargetBlank();
    }

    if (id === "ezcInternet") {
      clearAll();
      $(selectedItemOutput).html(ezcInternet.template);
      $(selectedItemNotes).html(ezcInternet.notes);
      $(selectedItemLinks).html(ezcInternet.links);

      setTargetBlank();
    }

    if (id === "ezcPhone") {
      clearAll();
      $(selectedItemOutput).html(ezcPhone.template);
      $(selectedItemNotes).html(ezcPhone.notes);
      $(selectedItemLinks).html(ezcPhone.links);

      setTargetBlank();
    }

    if (id === "ezcCableInternet") {
      clearAll();
      $(selectedItemOutput).html(ezcCableInternet.template);
      $(selectedItemNotes).html(ezcCableInternet.notes);
      $(selectedItemLinks).html(ezcCableInternet.links);

      setTargetBlank();
    }

    if (id === "ezcCablePhone") {
      clearAll();
      $(selectedItemOutput).html(ezcCablePhone.template);
      $(selectedItemNotes).html(ezcCablePhone.notes);
      $(selectedItemLinks).html(ezcCablePhone.links);

      setTargetBlank();
    }

    if (id === "ezcInternetPhone") {
      clearAll();
      $(selectedItemOutput).html(ezcInternetPhone.template);
      $(selectedItemNotes).html(ezcInternetPhone.notes);
      $(selectedItemLinks).html(ezcInternetPhone.links);

      setTargetBlank();
    }

    if (id === "ezcCableInternetPhone") {
      clearAll();
      $(selectedItemOutput).html(ezcCableInternetPhone.template);
      $(selectedItemNotes).html(ezcCableInternetPhone.notes);
      $(selectedItemLinks).html(ezcCableInternetPhone.links);

      setTargetBlank();
    }


    if (id === "ezcMailRemote") {
      clearAll();
      $(selectedItemOutput).html(ezcMailRemote.template);
      $(selectedItemNotes).html(ezcMailRemote.notes);
      $(selectedItemLinks).html(ezcMailRemote.links);

      setTargetBlank();
    }

    if (id === "ezcEmptyCarton") {
      clearAll();
      $(selectedItemOutput).html(ezcEmptyCarton.template);
      $(selectedItemNotes).html(ezcEmptyCarton.notes);
      $(selectedItemLinks).html(ezcEmptyCarton.links);

      setTargetBlank();
    }

    if (id === "ezcLLSwapMailOut") {
      clearAll();
      $(selectedItemOutput).html(ezcLLSwapMailOut.template);
      $(selectedItemNotes).html(ezcLLSwapMailOut.notes);
      $(selectedItemLinks).html(ezcLLSwapMailOut.links);

      setTargetBlank();
    }

    if (id === "ezcLLSwapPickUp") {
      clearAll();
      $(selectedItemOutput).html(ezcLLSwapPickUp.template);
      $(selectedItemNotes).html(ezcLLSwapPickUp.notes);
      $(selectedItemLinks).html(ezcLLSwapPickUp.links);

      setTargetBlank();
    }

    if (id === "ezcNonCompliantModemSwap") {
      clearAll();
      $(selectedItemOutput).html(ezcNonCompliantModemSwap.template);
      $(selectedItemNotes).html(ezcNonCompliantModemSwap.notes);
      $(selectedItemLinks).html(ezcNonCompliantModemSwap.links);

      setTargetBlank();
    }

    if (id === "ezcSIKResearch") {
      clearAll();
      $(selectedItemOutput).html(ezcSIKResearch.template);
      $(selectedItemNotes).html(ezcSIKResearch.notes);
      $(selectedItemLinks).html(ezcSIKResearch.links);

      setTargetBlank();
    }


    /***** Existing Customer Modify Existing LOB or Add LOB *****/

    if (id === "cosOfficeOnly") {
      clearAll();
      $(selectedItemOutput).html(cosNTrpCable.template);
      $(selectedItemNotes).html(cosNTrpCable.notes);
      $(selectedItemLinks).html(cosNTrpCable.links);
      setTargetBlank();
    }

    if (id === "cosTechInstall") {
      clearAll();
      $(selectedItemOutput).html(cosTrpCable.template);
      $(selectedItemNotes).html(cosTrpCable.notes);
      $(selectedItemLinks).html(cosTrpCable.links);
      setTargetBlank();
    }

    if (id === "addNewLOBSelfInstall") {
      clearAll();
      $(selectedItemOutput).html(addNewLOBSelfInstall.template);
      $(selectedItemNotes).html(addNewLOBSelfInstall.notes);
      $(selectedItemLinks).html(addNewLOBSelfInstall.links);
      setTargetBlank();
    }

    if (id === "addNewLOBCable") {
      clearAll();
      $(selectedItemOutput).html(addNewLOBCable.template);
      $(selectedItemNotes).html(addNewLOBCable.notes);
      $(selectedItemLinks).html(addNewLOBCable.links);
      setTargetBlank();
    }

    if (id === "addNewLOBInternet") {
      clearAll();
      $(selectedItemOutput).html(addNewLOBInternet.template);
      $(selectedItemNotes).html(addNewLOBInternet.notes);
      $(selectedItemLinks).html(addNewLOBInternet.links);
      setTargetBlank();
    }

    if (id === "addNewLOBPhone") {
      clearAll();
      $(selectedItemOutput).html(addNewLOBPhone.template);
      $(selectedItemNotes).html(addNewLOBPhone.notes);
      $(selectedItemLinks).html(addNewLOBPhone.links);
      setTargetBlank();
    }

    if (id === "addNewLOBCableInternet") {
      clearAll();
      $(selectedItemOutput).html(addNewLOBCableInternet.template);
      $(selectedItemNotes).html(addNewLOBCableInternet.notes);
      $(selectedItemLinks).html(addNewLOBCableInternet.links);
      setTargetBlank();
    }

    if (id === "addNewLOBCablePhone") {
      clearAll();
      $(selectedItemOutput).html(addNewLOBCablePhone.template);
      $(selectedItemNotes).html(addNewLOBCablePhone.notes);
      $(selectedItemLinks).html(addNewLOBCablePhone.links);
      setTargetBlank();
    }

    if (id === "addNewLOBInternetPhone") {
      clearAll();
      $(selectedItemOutput).html(addNewLOBInternetPhone.template);
      $(selectedItemNotes).html(addNewLOBInternetPhone.notes);
      $(selectedItemLinks).html(addNewLOBInternetPhone.links);
      setTargetBlank();
    }



    /***** Brand New Customer Install *****/

    if (id === "newLOBCable") {
      clearAll();
      $(selectedItemOutput).html(newLOBCable.template);
      $(selectedItemNotes).html(newLOBCable.notes);
      $(selectedItemLinks).html(newLOBCable.links);
      setTargetBlank();
    }

    if (id === "newLOBInternet") {
      clearAll();
      $(selectedItemOutput).html(newLOBInternet.template);
      $(selectedItemNotes).html(newLOBInternet.notes);
      $(selectedItemLinks).html(newLOBInternet.links);
      setTargetBlank();
    }

    if (id === "newLOBPhone") {
      clearAll();
      $(selectedItemOutput).html(newLOBPhone.template);
      $(selectedItemNotes).html(newLOBPhone.notes);
      $(selectedItemLinks).html(newLOBPhone.links);
      setTargetBlank();
    }

    if (id === "newLOBCableInternet") {
      clearAll();
      $(selectedItemOutput).html(newLOBCableInternet.template);
      $(selectedItemNotes).html(newLOBCableInternet.notes);
      $(selectedItemLinks).html(newLOBCableInternet.links);
      setTargetBlank();
    }

    if (id === "newLOBCablePhone") {
      clearAll();
      $(selectedItemOutput).html(newLOBCablePhone.template);
      $(selectedItemNotes).html(newLOBCablePhone.notes);
      $(selectedItemLinks).html(newLOBCablePhone.links);
      setTargetBlank();
    }

    if (id === "newLOBInternetPhone") {
      clearAll();
      $(selectedItemOutput).html(newLOBInternetPhone.template);
      $(selectedItemNotes).html(newLOBInternetPhone.notes);
      $(selectedItemLinks).html(newLOBInternetPhone.links);
      setTargetBlank();
    }

    if (id === "newLOBCableInternetPhone") {
      clearAll();
      $(selectedItemOutput).html(newLOBCableInternetPhone.template);
      $(selectedItemNotes).html(newLOBCableInternetPhone.notes);
      $(selectedItemLinks).html(newLOBCableInternetPhone.links);
      setTargetBlank();
    }

    if (id === "officeOnlyCOS") {
      clearAll();
      $(selectedItemOutput).html(cosOfficeOnly.template);
      $(selectedItemNotes).html(cosOfficeOnly.notes);
      $(selectedItemLinks).html(cosOfficeOnly.links);
      setTargetBlank();
    }

    if (id === "tnFeatureChange") {
      clearAll();
      $(selectedItemOutput).html(tnFeatureChange.template);
      $(selectedItemNotes).html(tnFeatureChange.notes);
      $(selectedItemLinks).html(tnFeatureChange.links);
      setTargetBlank();
    }

    /***** Transfer of Service - Self Install *****/

    if (id === "transferOfService") {
      clearAll();
      $(selectedItemOutput).html(transferOfService.template);
      $(selectedItemNotes).html(transferOfService.notes);
      $(selectedItemLinks).html(transferOfService.links);
      setTargetBlank();
    }

    if (id === "tosCableEZC") {
      clearAll();
      $(selectedItemOutput).html(tosCableEZC.template);
      $(selectedItemNotes).html(tosCableEZC.notes);
      $(selectedItemLinks).html(tosCableEZC.links);
      setTargetBlank();
    }

    if (id === "tosInternetEZC") {
      clearAll();
      $(selectedItemOutput).html(tosInternetEZC.template);
      $(selectedItemNotes).html(tosInternetEZC.notes);
      $(selectedItemLinks).html(tosInternetEZC.links);
      setTargetBlank();
    }

    if (id === "tosPhoneEZC") {
      clearAll();
      $(selectedItemOutput).html(tosPhoneEZC.template);
      $(selectedItemNotes).html(tosPhoneEZC.notes);
      $(selectedItemLinks).html(tosPhoneEZC.links);
      setTargetBlank();
    }

    if (id === "tosCableInternetEZC") {
      clearAll();
      $(selectedItemOutput).html(tosCableInternetEZC.template);
      $(selectedItemNotes).html(tosCableInternetEZC.notes);
      $(selectedItemLinks).html(tosCableInternetEZC.links);
      setTargetBlank();
    }

    if (id === "tosCablePhoneEZC") {
      clearAll();
      $(selectedItemOutput).html(tosCablePhoneEZC.template);
      $(selectedItemNotes).html(tosCablePhoneEZC.notes);
      $(selectedItemLinks).html(tosCablePhoneEZC.links);
      setTargetBlank();
    }

    if (id === "tosInternetPhoneEZC") {
      clearAll();
      $(selectedItemOutput).html(tosInternetPhoneEZC.template);
      $(selectedItemNotes).html(tosInternetPhoneEZC.notes);
      $(selectedItemLinks).html(tosInternetPhoneEZC.links);
      setTargetBlank();
    }

    if (id === "tosCableInternetPhoneEZC") {
      clearAll();
      $(selectedItemOutput).html(tosCableInternetPhoneEZC.template);
      $(selectedItemNotes).html(tosCableInternetPhoneEZC.notes);
      $(selectedItemLinks).html(tosCableInternetPhoneEZC.links);
      setTargetBlank();
    }

    if (id === "tosCableTech") {
      clearAll();
      $(selectedItemOutput).html(tosCableTech.template);
      $(selectedItemNotes).html(tosCableTech.notes);
      $(selectedItemLinks).html(tosCableTech.links);
      setTargetBlank();
    }

    if (id === "tosInternetTech") {
      clearAll();
      $(selectedItemOutput).html(tosInternetTech.template);
      $(selectedItemNotes).html(tosInternetTech.notes);
      $(selectedItemLinks).html(tosInternetTech.links);
      setTargetBlank();
    }

    if (id === "tosPhoneTech") {
      clearAll();
      $(selectedItemOutput).html(tosPhoneTech.template);
      $(selectedItemNotes).html(tosPhoneTech.notes);
      $(selectedItemLinks).html(tosPhoneTech.links);
      setTargetBlank();
    }

    if (id === "tosCableInternetTech") {
      clearAll();
      $(selectedItemOutput).html(tosCableInternetTech.template);
      $(selectedItemNotes).html(tosCableInternetTech.notes);
      $(selectedItemLinks).html(tosCableInternetTech.links);
      setTargetBlank();
    }

    if (id === "tosCablePhoneTech") {
      clearAll();
      $(selectedItemOutput).html(tosCablePhoneTech.template);
      $(selectedItemNotes).html(tosCablePhoneTech.notes);
      $(selectedItemLinks).html(tosCablePhoneTech.links);
      setTargetBlank();
    }

    if (id === "tosInternetPhoneTech") {
      clearAll();
      $(selectedItemOutput).html(tosInternetPhoneTech.template);
      $(selectedItemNotes).html(tosInternetPhoneTech.notes);
      $(selectedItemLinks).html(tosInternetPhoneTech.links);
      setTargetBlank();
    }

    if (id === "tosCableInternetPhoneTech") {
      clearAll();
      $(selectedItemOutput).html(tosCableInternetPhoneTech.template);
      $(selectedItemNotes).html(tosCableInternetPhoneTech.notes);
      $(selectedItemLinks).html(tosCableInternetPhoneTech.links);
      setTargetBlank();
    }


    /***** Other / Misc *****/

    if (id === "officeOnlyCOS") {
      clearAll();
      $(selectedItemOutput).html(cosNTrpCable.template);
      $(selectedItemNotes).html(cosNTrpCable.notes);
      $(selectedItemLinks).html(cosNTrpCable.links);
      setTargetBlank();
    }

    if (id === "tnFeatureChange") {
      clearAll();
      $(selectedItemOutput).html(tnFeatureChange.template);
      $(selectedItemNotes).html(tnFeatureChange.notes);
      $(selectedItemLinks).html(tnFeatureChange.links);
      setTargetBlank();
    }

    if (id === "wallfish") {
      clearAll();
      $(selectedItemOutput).html(wallfish.template);
      $(selectedItemNotes).html(wallfish.notes);
      $(selectedItemLinks).html(wallfish.links);
      setTargetBlank();
    }


    /***** SRO / Down Drops *****/

    if (id === "generalSROCodes") {
      clearAll();
      $(selectedItemOutput).html(generalSROCodes.template);
      $(selectedItemNotes).html(generalSROCodes.notes);
      $(selectedItemLinks).html(generalSROCodes.links);
      setTargetBlank();
    }

    if (id === "downDropProcess") {
      clearAll();
      $(selectedItemOutput).html(downDropProcess.template);
      $(selectedItemNotes).html(downDropProcess.notes);
      $(selectedItemLinks).html(downDropProcess.links);
      setTargetBlank();
    }

    if (id === "equipmentPickUp") {
      clearAll();
      $(selectedItemOutput).html(equipmentPickUp.template);
      $(selectedItemNotes).html(equipmentPickUp.notes);
      $(selectedItemLinks).html(equipmentPickUp.links);
      setTargetBlank();
    }

    if (id === "signalLeakage") {
      clearAll();
      $(selectedItemOutput).html(signalLeakage.template);
      $(selectedItemNotes).html(signalLeakage.notes);
      $(selectedItemLinks).html(signalLeakage.links);
      setTargetBlank();
    }

    if (id === "billingRegions") {
      clearAll();
      $(selectedItemOutput).html(billingRegions.template);
      $(selectedItemNotes).html(billingRegions.notes);
      $(selectedItemLinks).html(billingRegions.links);
      setTargetBlank();
    }

    // if (id === "otcsVSServiceCodes") {
    //   clearAll();
    //   $(selectedItemOutput).html(otcsVSServiceCodes.template);
    //   $(selectedItemNotes).html(otcsVSServiceCodes.notes);
    //   $(selectedItemLinks).html(otcsVSServiceCodes.links);
    //   setTargetBlank();
    // }



    /***** Toggles the inline note *****/
    // The inline note must be a sibling of the div marked 'has-inline-note' for this to work

    $(hasInlineNote).on("click", function () {
      $(this).nextAll(inlineNote).eq(0).slideToggle("hide");
    });

    $(inlineNote).on("click", function () {
      $(this).slideToggle("hide");
    });
  });


  /***** Clears all fields to start fresh *****/

  function clearAll() {
    selectedItemOutput.innerHTML = "...";
    selectedItemNotes.innerHTML = "";
    selectedItemLinks.innerHTML = "";
  }


  /***** Reset clears the selections in the 'You have selected' area *****/

  $("#reset").on("click", function () {
    selectedItemOutput.innerHTML = "...";
    selectedItemNotes.innerHTML = "";
    selectedItemLinks.innerHTML = "";
    defaultLinksDiv.innerHTML = "";
    defaultTechOTCArticlesDiv.innerHTML = "";
    defaultServiceCodeArticlesDiv.innerHTML = "";
    defaultBOTMarketArticlesDiv.innerHTML = "";
    defaultCSGArticlesDiv.innerHTML = "";
    $("ul").slideUp("hide");
  });





/* The end */
}); // End jQuery block
