import type { Exercise } from '../../spelling/types'
import { aud, novel } from '../build'

/**
 * Exercise 29 — class list 3 of six: words he misspelled at school last
 * term, back for another go. Each word is said on its own, then in a
 * sentence, and he writes it. The other lists come round as review.
 */
export const exercise29: Exercise = {
  id: 29,
  title: 'Class List 3',
  level: 4,
  levelName: 'Meaning Masters',
  targetMinutes: 6,
  concepts: ['class-words-3'],
  reviewConcepts: ['class-words-2', 'class-words-1', 'homophones-more'],
  activities: [
    aud('e29-1', 'class-words-3', 'heading', { withSentence: true, prompt: 'Words from your class list. Listen to the word, then to its sentence, and write the word.' }),
    aud('e29-2', 'class-words-3', 'bicycle', { withSentence: true }),
    aud('e29-3', 'class-words-3', 'exploded', { withSentence: true }),
    aud('e29-4', 'class-words-3', 'ladies', { withSentence: true }),
    aud('e29-5', 'class-words-3', 'world', { withSentence: true }),
    aud('e29-6', 'class-words-3', 'fairness', { withSentence: true }),
    aud('e29-7', 'class-words-3', 'useful', { withSentence: true, difficulty: 2 }),
    novel(aud('e29-8', 'class-words-3', 'traditions', { withSentence: true, difficulty: 2 })),
  ],
  ruleReveal: {
    title: 'Class List 3',
    text: 'The third class list. Most of these are a word you know with an ending on it: head-ing, explode-d, fair-ness, use-ful, tradition-s. Spell the base word first, then the ending.',
    examples: ['heading', 'ladies', 'fairness', 'traditions'],
  },
}
