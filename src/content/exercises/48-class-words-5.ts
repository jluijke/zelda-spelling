import type { Exercise } from '../../spelling/types'
import { aud, novel } from '../build'

/**
 * Exercise 48 — class list 5 of six: words he misspelled at school last
 * term, back for another go. Each word is said on its own, then in a
 * sentence, and he writes it. The other lists come round as review.
 */
export const exercise48: Exercise = {
  id: 48,
  title: 'Class List 5',
  level: 6,
  levelName: 'City Spellers',
  targetMinutes: 6,
  concepts: ['class-words-5'],
  reviewConcepts: ['class-words-4', 'class-words-3', 'igh-sound'],
  activities: [
    aud('e48-1', 'class-words-5', 'bubbly', { withSentence: true, prompt: 'Words from your class list. Listen to the word, then to its sentence, and write the word.' }),
    aud('e48-2', 'class-words-5', 'climate', { withSentence: true }),
    aud('e48-3', 'class-words-5', 'launch', { withSentence: true }),
    aud('e48-4', 'class-words-5', 'strength', { withSentence: true }),
    aud('e48-5', 'class-words-5', 'indigenous', { withSentence: true }),
    aud('e48-6', 'class-words-5', 'music', { withSentence: true, difficulty: 2 }),
    novel(aud('e48-7', 'class-words-5', 'colours', { withSentence: true, difficulty: 2 })),
  ],
  ruleReveal: {
    title: 'Class List 5',
    text: 'The fifth class list. Climate ends in a silent e, launch has au in the middle, strength packs n-g-t-h together, and colours keeps its u the Australian way.',
    examples: ['climate', 'launch', 'strength', 'colours'],
  },
}
