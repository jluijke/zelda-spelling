import type { Exercise } from '../../spelling/types'
import { aud, novel } from '../build'

/**
 * Exercise 53 — class list 6 of six: words he misspelled at school last
 * term, back for another go. Each word is said on its own, then in a
 * sentence, and he writes it. The other lists come round as review.
 */
export const exercise53: Exercise = {
  id: 53,
  title: 'Class List 6',
  level: 6,
  levelName: 'City Spellers',
  targetMinutes: 6,
  concepts: ['class-words-6'],
  reviewConcepts: ['class-words-5', 'class-words-4', 'tricky-words'],
  activities: [
    aud('e53-1', 'class-words-6', 'poison', { withSentence: true, prompt: 'Words from your class list. Listen to the word, then to its sentence, and write the word.' }),
    aud('e53-2', 'class-words-6', 'lightbulb', { withSentence: true }),
    aud('e53-3', 'class-words-6', 'motivator', { withSentence: true }),
    aud('e53-4', 'class-words-6', 'mountainous', { withSentence: true }),
    aud('e53-5', 'class-words-6', 'planet', { withSentence: true }),
    aud('e53-6', 'class-words-6', 'asteroid', { withSentence: true }),
    aud('e53-7', 'class-words-6', 'ultimate', { withSentence: true, difficulty: 2 }),
    novel(aud('e53-8', 'class-words-6', 'orchestra', { withSentence: true, difficulty: 2 })),
  ],
  ruleReveal: {
    title: 'Class List 6',
    text: 'The last class list. Asteroid has an e in the middle, orchestra starts with or and its ch says k, motivator ends in or, and mountainous is mountain with ous on the end.',
    examples: ['asteroid', 'orchestra', 'motivator', 'mountainous'],
  },
}
