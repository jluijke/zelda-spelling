import type { Exercise } from '../../spelling/types'
import { aud, novel } from '../build'

/**
 * Exercise 10 — class list 1 of six: words he misspelled at school last
 * term, back for another go. Each word is said on its own, then in a
 * sentence, and he writes it. The other lists come round as review.
 */
export const exercise10: Exercise = {
  id: 10,
  title: 'Class Words: Guitar and Galaxy',
  level: 2,
  levelName: 'Pattern Hunters',
  targetMinutes: 6,
  concepts: ['class-words-1'],
  reviewConcepts: ['ed-endings', 'plural-s-es', 'consonant-doubling'],
  activities: [
    aud('e10-1', 'class-words-1', 'strengths', { withSentence: true, prompt: 'Words from your class list. Listen to the word, then to its sentence, and write the word.' }),
    aud('e10-2', 'class-words-1', 'usable', { withSentence: true }),
    aud('e10-3', 'class-words-1', 'happiness', { withSentence: true }),
    aud('e10-4', 'class-words-1', 'watched', { withSentence: true }),
    aud('e10-5', 'class-words-1', 'used', { withSentence: true }),
    aud('e10-6', 'class-words-1', 'guitar', { withSentence: true, difficulty: 2 }),
    novel(aud('e10-7', 'class-words-1', 'galaxy', { withSentence: true, difficulty: 2 })),
  ],
  ruleReveal: {
    title: 'Class Words: Guitar and Galaxy',
    text: 'These are words from your class list, back for another go. Say each one in beats, write every beat, and look twice at the part that caught you last time: the n-g-t-h in strengths, the dropped e in usable, the silent u in guitar.',
    examples: ['strengths', 'usable', 'guitar', 'galaxy'],
  },
}
