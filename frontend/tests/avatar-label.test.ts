// @vitest-environment node

import { describe, expect, it } from 'vitest';
import { avatarLabel } from '../src/utils/avatar-label';

const label = (name: string | undefined) => avatarLabel(name, 'XX');

describe('avatarLabel', () => {
  it('takes first letters of the first two words', () => {
    expect(label('Kamenny vrch')).toBe('KV');
    expect(label('MBX-BASE')).toBe('MB');
    expect(label('MBX-Base')).toBe('MB');
    expect(label('oak1.mesh.example')).toBe('OM');
    expect(label('oak1-rpt.mesh.example')).toBe('OR');
    expect(label('a_b c')).toBe('AB');
  });

  it('takes the first two letters of a single word', () => {
    expect(label('Public')).toBe('PU');
    expect(label('Hobbit')).toBe('HO');
    expect(label('X')).toBe('X');
  });

  it('keeps diacritics', () => {
    expect(label('Šimon')).toBe('ŠI');
    expect(label('Praha Bubny')).toBe('PB');
    expect(label('Čtvrtá')).toBe('ČT');
    expect(label('S\u030Cimon')).toBe('ŠI');
  });

  it('ignores a leading # on channels', () => {
    expect(label('#test')).toBe('TE');
    expect(label('#hamradio')).toBe('HA');
    expect(label('#plzen-sever')).toBe('PS');
  });

  it('uses the first letter and the emoji', () => {
    expect(label('Lx01-T114 📟')).toBe('L📟');
    expect(label('Bridge.RPT🗼')).toBe('B🗼');
    expect(label('🗼Bridge')).toBe('B🗼');
    expect(label('Omega.rpt 🦠')).toBe('O🦠');
  });

  it('uses the last of several emoji', () => {
    expect(label('Lesna 🫎 🗼')).toBe('L🗼');
    expect(label('📟 Hana 🦠')).toBe('H🦠');
  });

  it('keeps a joined emoji, a skin tone and a flag whole', () => {
    expect(label('Tech 👩‍💻')).toBe('T👩‍💻');
    expect(label('Hana 👍🏽')).toBe('H👍🏽');
    expect(label('Praha 🇨🇿')).toBe('P🇨🇿');
    expect(label('Radio 📻️')).toBe('R📻️');
  });

  it('shows just the emoji without letters', () => {
    expect(label('📟')).toBe('📟');
  });

  it('falls back without anything to show', () => {
    expect(label('')).toBe('XX');
    expect(label(undefined)).toBe('XX');
    expect(label('--- ###')).toBe('XX');
  });
});
