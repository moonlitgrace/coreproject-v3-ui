import { JSONToTree } from "$functions/json_to_tree";

import { expect, test } from "vitest";

test("format date function", () => {
    const tree = new JSONToTree({
        old_json: [],
        json: [
            {
                pk: 23,
                created_at: "2023-12-07T18:15:43.653358Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "dsadasdasdasdas",
                path: "000d",
                childrens: 0,
                ratio: 1,
                user_reaction: "upvoted"
            },
            {
                pk: 15,
                created_at: "2023-12-07T17:28:10.806627Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "hello",
                path: "0005",
                childrens: 0,
                ratio: 1,
                user_reaction: "upvoted"
            },
            {
                pk: 8,
                created_at: "2023-12-05T13:25:22.532728Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "dfasasdf",
                path: "0001",
                childrens: 1,
                ratio: 1,
                user_reaction: "upvoted"
            },
            {
                pk: 7,
                created_at: "2023-12-05T13:25:03.460241Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "gafdfagd",
                path: "0000",
                childrens: 0,
                ratio: 1,
                user_reaction: "upvoted"
            },
            {
                pk: 63,
                created_at: "2023-12-16T10:18:00.241983Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "gaw",
                path: "000l",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 62,
                created_at: "2023-12-16T10:15:05.110537Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "he",
                path: "000k",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 61,
                created_at: "2023-12-16T10:12:36.435625Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "wolrd",
                path: "000j",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 60,
                created_at: "2023-12-16T10:10:56.864981Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "world",
                path: "000i",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 59,
                created_at: "2023-12-16T10:10:50.900050Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "Hello",
                path: "000h",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 26,
                created_at: "2023-12-07T19:12:09.552370Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "yrdy",
                path: "000g",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 25,
                created_at: "2023-12-07T19:08:48.777193Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "gege",
                path: "000f",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 24,
                created_at: "2023-12-07T19:07:51.870863Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "hello",
                path: "000e",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 22,
                created_at: "2023-12-07T18:13:03.551751Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "adsadasdasdasd",
                path: "000c",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 21,
                created_at: "2023-12-07T18:12:58.691033Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "fsadsaa",
                path: "000b",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 20,
                created_at: "2023-12-07T18:12:55.828847Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "fsa",
                path: "000a",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 19,
                created_at: "2023-12-07T18:10:46.348057Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "test fdas",
                path: "0009",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 18,
                created_at: "2023-12-07T18:10:36.935995Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "test",
                path: "0008",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 17,
                created_at: "2023-12-07T17:52:13.854507Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "dfasfdsa",
                path: "0007",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 16,
                created_at: "2023-12-07T17:52:06.861941Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "he",
                path: "0006",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 14,
                created_at: "2023-12-07T17:26:52.010770Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "geeasd",
                path: "0004",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 13,
                created_at: "2023-12-07T17:26:48.658050Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "gee",
                path: "0003",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 10,
                created_at: "2023-12-06T14:55:22.466917Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "fdasfsda",
                path: "0002",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            },
            {
                pk: 9,
                created_at: "2023-12-05T13:26:19.155016Z",
                user: {
                    username: "baseplate-admin#0001",
                    first_name: "",
                    last_name: "",
                    avatar: null,
                    avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                    email: "zarifahnaf@outlook.com"
                },
                text: "dfasasdf",
                path: "0001.0000",
                childrens: 0,
                ratio: 0,
                user_reaction: null
            }
        ]
    }).build();

    expect(tree).toStrictEqual([
        {
            pk: 23,
            created_at: "2023-12-07T18:15:43.653358Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "dsadasdasdasdas",
            path: "000d",
            childrens: 0,
            ratio: 1,
            user_reaction: "upvoted",
            child: []
        },
        {
            pk: 15,
            created_at: "2023-12-07T17:28:10.806627Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "hello",
            path: "0005",
            childrens: 0,
            ratio: 1,
            user_reaction: "upvoted",
            child: []
        },
        {
            pk: 8,
            created_at: "2023-12-05T13:25:22.532728Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "dfasasdf",
            path: "0001",
            childrens: 1,
            ratio: 1,
            user_reaction: "upvoted",
            child: [
                {
                    pk: 9,
                    created_at: "2023-12-05T13:26:19.155016Z",
                    user: {
                        username: "baseplate-admin#0001",
                        first_name: "",
                        last_name: "",
                        avatar: null,
                        avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                        email: "zarifahnaf@outlook.com"
                    },
                    text: "dfasasdf",
                    path: "0001.0000",
                    childrens: 0,
                    ratio: 0,
                    user_reaction: null,
                    child: []
                }
            ]
        },
        {
            pk: 7,
            created_at: "2023-12-05T13:25:03.460241Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "gafdfagd",
            path: "0000",
            childrens: 0,
            ratio: 1,
            user_reaction: "upvoted",
            child: []
        },
        {
            pk: 63,
            created_at: "2023-12-16T10:18:00.241983Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "gaw",
            path: "000l",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 62,
            created_at: "2023-12-16T10:15:05.110537Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "he",
            path: "000k",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 61,
            created_at: "2023-12-16T10:12:36.435625Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "wolrd",
            path: "000j",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 60,
            created_at: "2023-12-16T10:10:56.864981Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "world",
            path: "000i",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 59,
            created_at: "2023-12-16T10:10:50.900050Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "Hello",
            path: "000h",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 26,
            created_at: "2023-12-07T19:12:09.552370Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "yrdy",
            path: "000g",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 25,
            created_at: "2023-12-07T19:08:48.777193Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "gege",
            path: "000f",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 24,
            created_at: "2023-12-07T19:07:51.870863Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "hello",
            path: "000e",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 22,
            created_at: "2023-12-07T18:13:03.551751Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "adsadasdasdasd",
            path: "000c",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 21,
            created_at: "2023-12-07T18:12:58.691033Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "fsadsaa",
            path: "000b",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 20,
            created_at: "2023-12-07T18:12:55.828847Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "fsa",
            path: "000a",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 19,
            created_at: "2023-12-07T18:10:46.348057Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "test fdas",
            path: "0009",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 18,
            created_at: "2023-12-07T18:10:36.935995Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "test",
            path: "0008",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 17,
            created_at: "2023-12-07T17:52:13.854507Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "dfasfdsa",
            path: "0007",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 16,
            created_at: "2023-12-07T17:52:06.861941Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "he",
            path: "0006",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 14,
            created_at: "2023-12-07T17:26:52.010770Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "geeasd",
            path: "0004",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 13,
            created_at: "2023-12-07T17:26:48.658050Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "gee",
            path: "0003",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        },
        {
            pk: 10,
            created_at: "2023-12-06T14:55:22.466917Z",
            user: {
                username: "baseplate-admin#0001",
                first_name: "",
                last_name: "",
                avatar: null,
                avatar_url: "https://seccdn.libravatar.org/avatar/00df28f68f674fb6c4e59dc00ded9df3?s=512",
                email: "zarifahnaf@outlook.com"
            },
            text: "fdasfsda",
            path: "0002",
            childrens: 0,
            ratio: 0,
            user_reaction: null,
            child: []
        }
    ]);
});
