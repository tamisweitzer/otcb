
/*
* Versioning Rules

Semantic versioning (aka SemVer),[1] is a widely adopted version scheme[2] that uses a sequence of three digits (Major.Minor.Patch), an optional pre-release tag and optional build meta tag. In this scheme, risk and functionality are the measures of significance.

- Breaking changes are indicated by increasing the major number (high risk),
- new non-breaking features increment the minor number (medium risk)
- and all other non-breaking changes increment the patch number (lowest risk).

The presence of a pre-release tag (-alpha, -beta) indicates substantial risk, as does a major number of zero (0.y.z), which is used to indicate a work-in-progress that may contain any level of potentially breaking changes (highest risk).

Source: https://en.wikipedia.org/wiki/Software_versioning
*/

let appVersionLog = [
  {
    version: '3.0.8',
    notes: 'Correct typo in otcs-vs-service-codes article. Fixed link to go back to OTCB home page.'
  },
  {
    version: '3.0.7',
    notes: 'Replace references of "self install charges" to "self activation charges". Add note describing MTA. '
  },
  {
    version: '3.0.6',
    notes: 'Update the down drop process'
  },
  {
    version: '3.0.5',
    notes: 'Add section on OTCs vs Service codes. Minor formatting and editting corrections.'
  },
  {
    version: '3.0.4',
    notes: "Remove links to GEN2509 for SROs, GEN2086 for BHN OTCs, and HOW1638 for Equipment Pickup. Add description notes to SRO section. "
  },
  {
    version: '3.0.3',
    notes: "Add CoPilot articles for self installation. Alphabetize notes file."
  },
  {
    version: '3.0.2',
    notes: "Add links to CoPilot articles in EZC section. Formatting edits. Move app-version to its own file."
  },
  {
    version: '3.0.1',
    notes: "Update Like for Like Swap section to remove need to increment occurrence."
  },
  {
    version: '3.0',
    notes: "Complete rewrite of OTCB"
  }
];
