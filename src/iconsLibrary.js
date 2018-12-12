import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faSearch,
  faQuestionCircle,
  faBell,
  faIndustry,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'

/**
 * NOTE: if this file gets copy-pasted into a project that requires tree-shaking, it will brake the side-effect-free requirement
 * to do tree-shaking, because of the code below.
 */
library.add(faCheck)
library.add(faSearch)
library.add(faQuestionCircle)
library.add(faBell)
library.add(faIndustry)
