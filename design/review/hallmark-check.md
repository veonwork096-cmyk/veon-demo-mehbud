# Hallmark check

Hallmark 0 FAIL, 0 REFLEX, 5 WARN, 3 waived, 1 notes · render: ran · lang: uk

render tier: 5 screenshots in C:\Users\VeonV\Desktop\Мех буд\.hallmark\shots (1280x800, 1440x900, 1920x1080 folds; 1440 and 375 full pages)

| Grade | Gate | Where | Evidence | Fix |
|---|---|---|---|---|
| WARN | 49 | site\src\components\Designers.astro:16 | long clickable label "Надіслати ТЗ або креслення" without nowrap | Shorten the label or set nowrap |
| WARN | 49 | site\src\components\Hero.astro:37 | long clickable label "Зателефонувати {phones.kyiv.label}" without nowrap | Shorten the label or set nowrap |
| WARN | F2 | site\src\components\Footer.astro:32 | three-period ellipsis in prose x2 | Use a true ellipsis character (…) |
| WARN | F4 | site\src\styles\global.css:35 | 2 filled primary-button recipes: .btn--primary + .btn--light | One filled primary per page; demote the rest to outline/quiet variants |
| WARN | F25 | http://localhost:4322/:1 | [375px] 44 words shown at 1440 are hidden on a phone (first: "Блискавкозахист: чи може металевий ф") | If it matters, make it work on a phone; if it does not, cut it everywhere |

RESULT: PASS
