<?php

/*
 * This file is part of tedem/flarum-ext-scroll-progress.
 *
 * Copyright (c) 2021 Medet "tedem" Erdal.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace tedem\ScrollProgress;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
];
