import type { Exercise } from '../../spelling/types'
import { aud, novel } from '../build'

/**
 * Exercise 19 — class list 2 of six: words he misspelled at school last
 * term, back for another go. Each word is said on its own, then in a
 * sentence, and he writes it. The other lists come round as review.
 */
export const exercise19: Exercise = {
  id: 19,
  title: 'Class Words: Scientist',
  level: 3,
  levelName: 'Word Engineers',
  targetMinutes: 6,
  concepts: ['class-words-2'],
  reviewConcepts: ['class-words-1', 'prefix-re-un', 'silent-letters'],
  activities: [
    aud('e19-1', 'class-words-2', 'young', { withSentence: true, prompt: 'Words from your class list. Listen to the word, then to its sentence, and write the word.' }),
    aud('e19-2', 'class-words-2', 'definitely', { withSentence: true }),
    aud('e19-3', 'class-words-2', 'counsellor', { withSentence: true }),
    aud('e19-4', 'class-words-2', 'complimented', { withSentence: true }),
    aud('e19-5', 'class-words-2', 'scientist', { withSentence: true }),
    aud('e19-6', 'class-words-2', 'specialist', { withSentence: true, difficulty: 2 }),
    novel(aud('e19-7', 'class-words-2', 'biology', { withSentence: true, difficulty: 2 })),
  ],
  ruleReveal: {
    title: 'Class Words: Scientist',
    text: 'The second class list. Long words are just beats in a row: def-i-nite-ly has "finite" hiding in it, coun-sel-lor doubles its l, and sci-en-tist and spe-cial-ist both end in ist.',
    examples: ['definitely', 'counsellor', 'scientist', 'biology'],
  },
}
