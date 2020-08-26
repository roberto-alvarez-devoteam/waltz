/*
 * Waltz - Enterprise Architecture
 * Copyright (C) 2016, 2017, 2018, 2019 Waltz open source project
 * See README.md for more information
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific
 *
 */

package com.khartec.waltz.model.scenario;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.khartec.waltz.model.Nullable;
import com.khartec.waltz.model.command.Command;
import org.immutables.value.Value;

import java.util.Objects;

@Value.Immutable
@JsonSerialize(as = ImmutableChangeScenarioCommand.class)
@JsonDeserialize(as = ImmutableChangeScenarioCommand.class)
public abstract class ChangeScenarioCommand implements Command {
    public abstract long scenarioId();
    public abstract long appId();
    public abstract long columnId();
    public abstract long rowId();
    public abstract long ratingSchemeId();
    @Nullable
    public abstract Character rating();
    @Nullable
    public abstract Character previousRating();
    @Nullable
    public abstract String comment();

    @Value.Derived
    public boolean hasRatingChanged() {
        return !Objects.equals(rating(), previousRating());
    }
}
