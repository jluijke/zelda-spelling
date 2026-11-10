import type { Exercise } from '../../spelling/types'
import { aud, novel } from '../build'

/**
 * Exercise 38 — class list 4 of six: words he misspelled at school last
 * term, back for another go. Each word is said on its own, then in a
 * sentence, and he writes it. The other lists come round as review.
 */
export const exercise38: Exercise = {
  id: 38,
  title: 'Class List 4',
  level: 5,
  levelName: 'Spelling Detectives',
  targetMinutes: 6,
  concepts: ['class-words-4'],
  reviewConcepts: ['class-words-3', 'class-words-2', 'australian-spelling'],
  activities: [
    aud('e38-1', 'class-words-4', 'always', { withSentence: true, prompt: 'Words from your class list. Listen to the word, then to its sentence, and write the word.' }),
    aud('e38-2', 'class-words-4', 'think', { withSentence: true }),
    aud('e38-3', 'class-words-4', 'teacher', { withSentence: true }),
    aud('e38-4', 'class-words-4', 'complete', { withSentence: true }),
    aud('e38-5', 'class-words-4', 'behaved', { withSentence: true }),
    aud('e38-6', 'class-words-4', 'Australia', { withSentence: true }),
    aud('e38-7', 'class-words-4', 'temperature', { withSentence: true, difficulty: 2 }),
    novel(aud('e38-8', 'class-words-4', 'assignment', { withSentence: true, difficulty: 2 })),
  ],
  ruleReveal: {
    title: 'Class List 4',
    text: 'The fourth class list. Watch the quiet letters: always has one l, assignment has a g you never hear, and temperature has four beats, tem-per-a-ture, even if you say it in three.',
    examples: ['always', 'Australia', 'temperature', 'assignment'],
  },
}
