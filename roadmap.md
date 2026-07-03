# Music Discovery Platform — Plan & Roadmap

## The Idea

A platform-agnostic shell for artists and labels to share links to their music (hosted wherever it actually lives — Bandcamp, Spotify, SoundCloud, a label's own site), paired with human/social curation as the primary discovery mechanism — deliberately avoiding algorithmic recommendation.

## Core Thesis

Most tools solve one half of this problem, not both:
- **Linktree and similar** solve the "shell for external links" problem, but have zero curation.
- **Bandcamp, SoundCloud, RateYourMusic** have curation and community, but only within their own hosted content.

The gap: a platform that is agnostic to where the music lives, with serious curatorial infrastructure layered on top. The product isn't competing for the music itself — it's competing for the *discovery/context layer* around it.

## Entity Model (for later phases)

- **Artist** — the atomic unit. Always has a standalone profile, whether label-affiliated or fully independent. No artist page should look "less complete" for lacking a label.
- **Label / Curator** — an expansive definition: traditional labels, netlabels, collectives, curated compilation series, or a single tastemaking individual. Functions as a curatorial entity, not necessarily an owner/publisher of the music.
- **Release** — belongs to one or more artists; can be linked to zero, one, or multiple labels/curators. Many-to-many at the release level, not the artist level, since artists move between independent and label-affiliated status over time.
- **"Released by" vs. "Curated/featured by"** — a track can be self-released by the artist *and* separately featured by multiple curators who didn't release it. This is the mechanism that creates curatorial density without requiring label ownership.

## Discovery Philosophy

No recommendation algorithm. Discovery happens through:
- Deep, browsable label/curator catalogs (piggybacking on curation that already happened)
- Transitive following (who the people/labels you follow, follow — graph traversal, not computation)
- First-class curatorial objects: named "crates"/lists with context, not just playlists
- Manual "sounds good next to" linking between artists, set by humans, not similarity scoring
- Rotating guest-curator spotlights (future phase)

Tag quality will matter — worth deciding later whether tags are artist-submitted, curator-assigned, or lightly moderated, since discovery is only as good as the taxonomy underneath it.

## Reality Check — Why This Might Work

- Drone/ambient/electro-acoustic is a real, engaged audience that is underserved by current discovery tools — scattered across Bandcamp tags, a handful of blogs, forums, and word of mouth.
- This scene already resists algorithmic flattening (streaming autoplay tends to misfile or homogenize this kind of music), so "human-curated, platform-agnostic" is aligned with what the audience already wants, not a hard sell.
- Founder (me) is a musician within this scene — existing taste, credibility, and peer network, rather than a cold-start curatorial identity.

## Honest Constraints

- The niche is small. Phase 1 success looks like a few hundred deeply engaged people, not viral growth. That's an acceptable outcome for validating the model, not a fast-growth play.
- The hard part of this product is not technical — it's demonstrating good enough taste, publicly, for long enough, that people trust the curation before any self-serve tooling exists.

## Things to Prove (in order, not in parallel)

1. **Artists/labels are willing to be featured** — cheapest to test, should be tested first via direct outreach.
2. **I can sustain a curatorial voice over time** — a precondition more than a separate test; largely about personal capacity/interest.
3. **People will follow the curation and come back** — the real unknown, only answerable with real usage data, and downstream of #1 and #2 actually happening.

## Phased Build Plan

### Phase 1 — Prove the taste, not the platform
- A simple, owned website (not a newsletter — a newsletter tests inbox habits, not destination pull; not a full app yet).
- No user accounts, no self-serve artist profiles, no tags/search yet.
- Structure:
  - Homepage — latest features/crates, short and opinionated
  - Individual "crate" pages — a handful of albums/artists grouped around a theme or thread, linking out to wherever the music lives
  - "About / who's curating this" page — trust in the curator's ear is the core value proposition in this scene
  - Lightweight analytics to track actual return visits
- Optional: simple "notify me of new posts" email opt-in, as a lightweight on-ramp — not the whole product.

**Outreach for first crates:**
- Required from artists/labels: permission to be featured/linked, and the correct link(s) they want traffic sent to.
- Nice to have: a bit of context/quote only they can give, artwork/press photo if needed, a heads-up on release timing.
- Not needed: exclusivity, contracts, account creation, or any effort-heavy ask on their part.
- Tone: peer to peer, not a business proposition — roughly as easy to say yes to as agreeing to a repost.

### Phase 2 — Formalize the object model
- Only once the curatorial voice has traction: build out real entities (artist/label/curator profiles, tags, following).
- Justify the infrastructure with actual content and an actual audience, rather than building it speculatively.

### Phase 3 — Open curation to others
- Only once there's enough gravity that outside curators want in.
- Build tooling for others to create their own crates/features.
- Shift from "editorial team" to "platform" — likely recruiting from the peer network of labels, netlabels, and radio show hosts already adjacent to the scene.

## Open Questions (for later)

- How tags get assigned and moderated once search/filtering is built.
- Whether/how to signal trust or vetting for independent artists without label affiliation (verified profiles, editorial "featured" flag, or leaning on the social graph itself).
- Curator reputation/quality control once curation opens up to others in Phase 3.
- Naming: "Label" may not hold up once bedroom curators and one-person tastemaker accounts are common — consider "Curator" or "Collective" as the entity matures.
