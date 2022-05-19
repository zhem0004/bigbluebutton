package com.meetingApi.response;

import lombok.*;

@RequiredArgsConstructor
@EqualsAndHashCode
@Getter
public class ResponseJSON {  // An object to be returned as JSON by api (may be replaced by better alternative)

    private String result;
    

    public ResponseJSON(
        String result) {
        this.result =result;
    }

    public String getResult() {
        return result;
    }
}

