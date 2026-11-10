/**
 * The class lists: six sets of words he misspelled at school last term, a
 * repeat on purpose. Each list is one exercise, spaced through the game, and
 * each list's review pool is the next list's words, so a slip on one class
 * word is re-tested with another class word and the lists keep coming back
 * as review long after their own exercise.
 */
import type { Concept } from '../spelling/types'
import { aud } from './build'

export const CLASS_LISTS: Record<number, string[]> = {
  1: ['strengths', 'usable', 'happiness', 'watched', 'used', 'guitar', 'galaxy'],
  2: ['young', 'definitely', 'counsellor', 'complimented', 'scientist', 'specialist', 'biology'],
  3: ['heading', 'bicycle', 'exploded', 'ladies', 'world', 'fairness', 'useful', 'traditions'],
  4: ['always', 'think', 'teacher', 'complete', 'behaved', 'Australia', 'temperature', 'assignment'],
  5: ['bubbly', 'climate', 'launch', 'strength', 'indigenous', 'music', 'colours'],
  6: ['poison', 'lightbulb', 'motivator', 'mountainous', 'planet', 'asteroid', 'ultimate', 'orchestra'],
}

/** Which exercise teaches each list. */
export const CLASS_EXERCISES: Record<number, number> = { 1: 10, 2: 19, 3: 29, 4: 38, 5: 48, 6: 53 }

const REMINDERS: Record<number, string> = {
  1: 'Words from your class list. Look twice at the tricky bits: "strengths" packs n-g-t-h together, "usable" drops the e of use, and "guitar" hides a silent u.',
  2: 'Words from your class list. "definitely" has "finite" inside it, "counsellor" has a double l, and "scientist" starts with sci.',
  3: 'Words from your class list. "heading" keeps the ea of head, "ladies" swaps the y for ies, and "traditions" ends in tions.',
  4: 'Words from your class list. "always" has one l, "Australia" starts with a capital and Au, and "assignment" hides a silent g.',
  5: 'Words from your class list. "climate" ends in a silent e, "launch" has au in the middle, and "colours" keeps its u.',
  6: 'Words from your class list. "asteroid" has an e in the middle, "orchestra" starts with or and its ch says k, and "mountainous" ends in ous.',
}

/** The pool for one list: the next list's words, said in a sentence. */
function pool(list: number): Concept['reviewPool'] {
  const next = (list % 6) + 1
  return (CLASS_LISTS[next] as string[]).slice(0, 7).map((word, i) =>
    aud(`cw${list}-r${i + 1}`, `class-words-${list}`, word, { withSentence: true, difficulty: i < 4 ? 1 : 2 }),
  )
}

export const CLASS_CONCEPTS: Concept[] = [1, 2, 3, 4, 5, 6].map((list) => ({
  id: `class-words-${list}`,
  label: `Class words, list ${list}`,
  patternReminder: REMINDERS[list] as string,
  // The reminder above feeds the hint ladder; no card sits over the question.
  noSupportCard: true,
  introducedIn: CLASS_EXERCISES[list] as number,
  reviewPool: pool(list),
}))
