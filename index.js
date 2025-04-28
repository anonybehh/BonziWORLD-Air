const sanitize = require("sanitize-html");
var bonziTvCommercialMode = false;
var bonziTvCool = false;

// cosmic fucking broke bonzitv

// will soon move bonzitv's video lists inside this javascript file to declutter meat.js

// go behh yourself

// youtube url variables
let youtube_url = "https://www.youtube.com/watch?v=";
let youtube_tiny_url = "https://www.youtube.com/watch?v=";
let youtube_shorts_url = "";
let youtube_embed_url = "";
let youtube_music_url = "";

/*
  "https://www.youtube.com/watch?v=97dyt7MXWpo",
  "https://www.youtube.com/watch?v=t0JyCdk5ymo",
  "https://www.youtube.com/watch?v=bzXzGMbdQfY",
  "https://www.youtube.com/watch?v=DuD_boVOl54",
  "https://www.youtube.com/watch?v=H50wW4eAFKo",
  "https://www.youtube.com/watch?v=APAcU3YBhYc",
  "https://www.youtube.com/watch?v=H50wW4eAFKo",
  "https://www.youtube.com/watch?v=MmB9b5njVbA",
  "https://www.youtube.com/watch?v=tYoO9XkCCHg",
  "https://www.youtube.com/watch?v=K0damuN_9bQ",
  "https://www.youtube.com/watch?v=hb59QZW2SCA",
  "https://www.youtube.com/watch?v=5ls7g9eH7ss",
  "https://www.youtube.com/watch?v=VJs_VALzi_8",
  "https://www.youtube.com/watch?v=GCA5CB5uUyA",
  "https://www.youtube.com/watch?v=Jz6FCFoL3k4",
  "https://www.youtube.com/watch?v=CDLyImqvqVY",
  "https://www.youtube.com/watch?v=Wt2rGmUmm2A",
  "https://www.youtube.com/watch?v=YnuYnzXUuGY",
  "https://www.youtube.com/watch?v=exjhztp_IQY"
*/

// the clusterfuck of video ids
var videoIdsCommercials = [
  "https://www.youtube.com/watch?v=b2OUKjLzcEc",
  "https://www.youtube.com/watch?v=Uyw-bne3G2A",
  "https://www.youtube.com/watch?v=gcGI1f24eyM",
  "https://www.youtube.com/watch?v=K0damuN_9bQ",
  "https://www.youtube.com/watch?v=5ls7g9eH7ss",
  "https://www.youtube.com/watch?v=hb59QZW2SCA",
  "https://www.youtube.com/watch?v=VJs_VALzi_8",
  "https://www.youtube.com/watch?v=GCA5CB5uUyA",
  "https://www.youtube.com/watch?v=h6cp-6Zthm4",
  "https://www.youtube.com/watch?v=DuD_boVOl54",
  "https://www.youtube.com/watch?v=Jz6FCFoL3k4",
  "https://www.youtube.com/watch?v=9943uVZ-eL4",
  "https://www.youtube.com/watch?v=3rvFiHa6rJk",
  "https://www.youtube.com/watch?v=DSYiXCEWsVc",
  "https://www.youtube.com/watch?v=AykkOSaLphY",
  "https://www.youtube.com/watch?v=liqetY2e7a8",
];
var videoIds4PM2430PM = [
  "https://www.youtube.com/watch?v=n_sWTHQKr-s",
  "https://www.youtube.com/watch?v=FdjXC4aDNrc",
  "https://www.youtube.com/watch?v=oqwjsqLvaGA",
  "https://www.youtube.com/watch?v=ewQeG4bfh7o",
  "https://www.youtube.com/watch?v=J1xFJDSeHxI",
  "https://www.youtube.com/watch?v=AJNF04k6hDU",
  "https://www.youtube.com/watch?v=EXFJ1gUqSOI",
  "https://www.youtube.com/watch?v=zvB3h2IKdYU",
  "https://www.youtube.com/watch?v=ihDMzzMxsFY",
  "https://www.youtube.com/watch?v=JdPibO28X6g",
  "https://www.youtube.com/watch?v=BpJZAKy3-EI",
  "https://www.youtube.com/watch?v=y281xhixx9I",
  "https://www.youtube.com/watch?v=f-1tlzLYUE0",
  "https://www.youtube.com/watch?v=LBapITUr878",
  "https://www.youtube.com/watch?v=R7M2RiTgEO4",
  "https://www.youtube.com/watch?v=hYC5FcjhowU",
  "https://www.youtube.com/watch?v=PM2cT0GYs0k",
  "https://www.youtube.com/watch?v=kX-TUNMguqQ",
  "https://www.youtube.com/watch?v=CJjGRbm7AP0",
  "https://www.youtube.com/watch?v=nUXNQk-GpXE",
  "https://www.youtube.com/watch?v=pRIdTBDo5s0",
  "https://www.youtube.com/watch?v=lnUnMD8avFo",
  "https://www.youtube.com/watch?v=OHtNgbbZUHc",
  "https://www.youtube.com/watch?v=IWeeGlqWjTo",
  "https://www.youtube.com/watch?v=B-43bJpN9p0",
  "https://www.youtube.com/watch?v=ZlJUN6ld7Uw",
  "https://www.youtube.com/watch?v=cepnx5OtwMg",
  "https://www.youtube.com/watch?v=CyYUtJWu67g",
  "https://www.youtube.com/watch?v=kVPAH1SoJOs",
  "https://www.youtube.com/watch?v=CSSucrEZru0",
  "https://www.youtube.com/watch?v=voX77aqxMVM",
  "https://www.youtube.com/watch?v=VMenL3FtjwY",
  "https://www.youtube.com/watch?v=gMWMaYqMuvU",
  "https://www.youtube.com/watch?v=9CivuYkHkdw",
  "https://www.youtube.com/watch?v=nWjshODENSE",
  "https://www.youtube.com/watch?v=wC85p4WwT7o",
  "https://www.youtube.com/watch?v=-STfCX3_Dt8",
  "https://www.youtube.com/watch?v=2npJbktaXas",
  "https://www.youtube.com/watch?v=mW8HT3wTjtw",
  "https://www.youtube.com/watch?v=aqJxAEc8I98",
  "https://www.youtube.com/watch?v=7RTuOTLqNJg",
  "https://www.youtube.com/watch?v=D-mxD6R0PZk",
  "https://www.youtube.com/watch?v=gkpfOwxvP5Y",
  "https://www.youtube.com/watch?v=MaOJiU7ICSs",
  "https://www.youtube.com/watch?v=ldoCeoPnsr4",
  "https://www.youtube.com/watch?v=kRtuL6PVM3M",
  "https://www.youtube.com/watch?v=BxEn1br2hhA",
  "https://www.youtube.com/watch?v=E7e2NbRTv34",
  "https://www.youtube.com/watch?v=0Pw-W11hzaY",
  "https://www.youtube.com/watch?v=fjOraqJJfdo",
  "https://www.youtube.com/watch?v=-k2lYZmcyUs",
  "https://www.youtube.com/watch?v=IpDx4Fw137U",
  "https://www.youtube.com/watch?v=bIy7bGgPmu8",
  "https://www.youtube.com/watch?v=wGFfIulM2aw",
  "https://www.youtube.com/watch?v=xv3LBB6GAh4",
  "https://www.youtube.com/watch?v=SLfbsnOG3lA",
  "https://www.youtube.com/watch?v=YaRNqZT1QH4",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=pOiiAdshU5Q",
  "https://www.youtube.com/watch?v=WwnSgVJcGm8",
  "https://www.youtube.com/watch?v=XEwg5dwLjng",
  "https://www.youtube.com/watch?v=eYo8jusJkfA",
  "https://www.youtube.com/watch?v=iIBI3vVcce0",
  "https://www.youtube.com/watch?v=7K7gaKhkiVg",
  "https://www.youtube.com/watch?v=vX5baryGnnk",
  "https://www.youtube.com/watch?v=kEkmTUobm9A",
  "https://www.youtube.com/watch?v=ynWOhlnFJWQ",
  "https://www.youtube.com/watch?v=ofPNauMOvFU",
  "https://www.youtube.com/watch?v=LP4M4TBXg58",
  "https://www.youtube.com/watch?v=LP4M4TBXg58",
  "https://www.youtube.com/watch?v=LP4M4TBXg58",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
];
var videoIds5PM = [
  "https://www.youtube.com/watch?v=iK4BKnkW9rc",
  "https://www.youtube.com/watch?v=qjqBUYQb21g",
  "https://www.youtube.com/watch?v=XbI29tI5MXs",
  "https://www.youtube.com/watch?v=0dnRWrsgKrU",
  "https://www.youtube.com/watch?v=ohCm6YeovpQ",
  "https://www.youtube.com/watch?v=HVK-KiANd_Q",
  "https://www.youtube.com/watch?v=6-USBEqLicg",
  "https://www.youtube.com/watch?v=QoHbvZfu1-c",
  "https://www.youtube.com/watch?v=X2Q2X-7hVQw",
  "https://www.youtube.com/watch?v=mR-lbatS6ts",
  "https://www.youtube.com/watch?v=1wMsbj0VvVE",
  "https://www.youtube.com/watch?v=Mzf_jtM8jgw",
  "https://www.youtube.com/watch?v=qsATpni7B9s",
  "https://www.youtube.com/watch?v=a0tSVDjQbz0",
  "https://www.youtube.com/watch?v=4ES2y7bxENE",
  "https://www.youtube.com/watch?v=j32-UnN6m5E",
  "https://www.youtube.com/watch?v=86EkHcJsXhU",
  "https://www.youtube.com/watch?v=P3Ca0X-TO1U",
  "https://www.youtube.com/watch?v=UjnyCsweHOE",
  "https://www.youtube.com/watch?v=G2ApsOSMX2s",
  "https://www.youtube.com/watch?v=3Hssx5jy-f4",
  "https://www.youtube.com/watch?v=sRih4d0Um9U",
  "https://www.youtube.com/watch?v=lI-u0pJ-XEM",
  "https://www.youtube.com/watch?v=tv9UIy0RCus",
  "https://www.youtube.com/watch?v=wGKi7YITv84",
  "https://www.youtube.com/watch?v=FQ0ZvlLi3Aw",
  "https://www.youtube.com/watch?v=hlm9JW6hzu4",
  "https://www.youtube.com/watch?v=W61OP5HPSU4",
  "https://www.youtube.com/watch?v=PqS4Ckf01XI",
  "https://www.youtube.com/watch?v=BjiWP6GdaZs",
  "https://www.youtube.com/watch?v=VR6G2-BXk50",
  "https://www.youtube.com/watch?v=7D6W6Dzsinw",
  "https://www.youtube.com/watch?v=LWW9kyDhSGY",
  "https://www.youtube.com/watch?v=s60XUkdNoNc",
  "https://www.youtube.com/watch?v=PjfvbA3yaB4",
  "https://www.youtube.com/watch?v=8M1fDbBTeuc",
  "https://www.youtube.com/watch?v=OMtsPjcvOyA",
  "https://www.youtube.com/watch?v=1n1_ocOUx4M",
  "https://www.youtube.com/watch?v=8Yy_xnQTS9k",
  "https://www.youtube.com/watch?v=aTYAwNeP7hw",
  "https://www.youtube.com/watch?v=Cc4_lDIhhK4",
  "https://www.youtube.com/watch?v=dTUrgFaXR2o",
  "https://www.youtube.com/watch?v=IPQmfvcvOWI",
  "https://www.youtube.com/watch?v=tHjjbHkFqVw",
  "https://www.youtube.com/watch?v=UfDFvG0Px5A",
  "https://www.youtube.com/watch?v=mtxjk_kIi6I",
  "https://www.youtube.com/watch?v=M_U4NYPHuE8",
  "https://www.youtube.com/watch?v=XmheFB3vSmM",
  "https://www.youtube.com/watch?v=b9RSREv2NAE",
  "https://www.youtube.com/watch?v=YcZ4vXgsGh4",
  "https://www.youtube.com/watch?v=MnjMwoJpDag",
  "https://www.youtube.com/watch?v=8zVTrQ54oKA",
  "https://www.youtube.com/watch?v=HV7SQkbOKQQ",
  "https://www.youtube.com/watch?v=urX6QcVFkHY",
  "https://www.youtube.com/watch?v=Q7vthL5hIqo",
  "https://www.youtube.com/watch?v=N0j6NXznknU",
  "https://www.youtube.com/watch?v=u0qTJz2DUos",
  "https://www.youtube.com/watch?v=UioiM5KopzU",
  "https://www.youtube.com/watch?v=sDlGy1SxYGg",
  "https://www.youtube.com/watch?v=dnua8QvCfB0",
  "https://www.youtube.com/watch?v=FG0ydp-1mHE",
  "https://www.youtube.com/watch?v=bCm-EAd_oEI",
  "https://www.youtube.com/watch?v=aZ5lyqb4gUc",
  "https://www.youtube.com/watch?v=2HUy60DWYek",
  "https://www.youtube.com/watch?v=FEXeAlaL9cc",
  "https://www.youtube.com/watch?v=ORouZmGacHk",
  "https://www.youtube.com/watch?v=2v-8DArgo-Y",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=1cjfNYV-Z-U",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
  "https://www.youtube.com/watch?v=0zg7ZA8UGa8",
];
var videoIds7PM = [
  "https://www.youtube.com/watch?v=PT5HrjP-lPE",
  "https://www.youtube.com/watch?v=1yfUfH1jF3g",
  "https://www.youtube.com/watch?v=vN2BCZjZYWs",
  "https://www.youtube.com/watch?v=oZF2RUJHV8c",
  "https://www.youtube.com/watch?v=rNY5lwrmZ1w",
  "https://www.youtube.com/watch?v=E7sn6tjcZgI",
  "https://www.youtube.com/watch?v=kvsw74KWAIw",
  "https://www.youtube.com/watch?v=OX3rC3ENFw0",
  "https://www.youtube.com/watch?v=o3i64oR6Dv8",
  "https://www.youtube.com/watch?v=Frm0LTTtgFo",
  "https://www.youtube.com/watch?v=PFbYJ2-KpR8",
  "https://www.youtube.com/watch?v=rVAxjlFU28o",
  "https://www.youtube.com/watch?v=fIonJON2p9A",
  "https://www.youtube.com/watch?v=Gc_DMKiz9LU",
  "https://www.youtube.com/watch?v=bfk_pzQSfX8",
  "https://www.youtube.com/watch?v=SKLlmJKfcI0",
  "https://www.youtube.com/watch?v=r0W-607Atz0",
  "https://www.youtube.com/watch?v=nGQ-nCwHYcs",
  "https://www.youtube.com/watch?v=7hTge-5W3Cc",
  "https://www.youtube.com/watch?v=fBHJFPqKIG0",
  "https://www.youtube.com/watch?v=LvV7MOoSwy0",
  "https://www.youtube.com/watch?v=MTyBtwmvEjE",
  "https://www.youtube.com/watch?v=djMpH9D3NUQ",
  "https://www.youtube.com/watch?v=3_uRhxkjdB4",
  "https://www.youtube.com/watch?v=3VS4Nkzh-70",
  "https://www.youtube.com/watch?v=jX28oxrdUVI",
  "https://www.youtube.com/watch?v=dnBqjTmlLg8",
  "https://www.youtube.com/watch?v=r_mwNcxuxwY",
  "https://www.youtube.com/watch?v=xlyyu1Go4yU",
  "https://www.youtube.com/watch?v=l8g0z8yZ6FU",
  "https://www.youtube.com/watch?v=gMDgHPQ0YfI",
  "https://www.youtube.com/watch?v=HjWbtUBKuUc",
  "https://www.youtube.com/watch?v=WO2SCGfEYiE",
  "https://www.youtube.com/watch?v=ur8ys2aglI4",
  "https://www.youtube.com/watch?v=jmr5kAmIQGs",
  "https://www.youtube.com/watch?v=3va3bdtT9LQ",
  "https://www.youtube.com/watch?v=7vzfeyh-ow8",
  "https://www.youtube.com/watch?v=v2t6iP4mWvA",
  "https://www.youtube.com/watch?v=iwxbY-p_w0w",
  "https://www.youtube.com/watch?v=pdO9uKpzaYU",
  "https://www.youtube.com/watch?v=8iEXhbqami8",
  "https://www.youtube.com/watch?v=T-BoDW1_9P4",
  "https://www.youtube.com/watch?v=NgHygsNwTNk",
  "https://www.youtube.com/watch?v=jPKuyeDb0mM",
  "https://www.youtube.com/watch?v=EDsDnR2dzlw",
  "https://www.youtube.com/watch?v=ljl1jBEY3_A",
  "https://www.youtube.com/watch?v=jIwqlKDPq4s",
  "https://www.youtube.com/watch?v=TGulB0MfxPs",
  "https://www.youtube.com/watch?v=ehlrUPrvFuk",
  "https://www.youtube.com/watch?v=vkUIyOm9hZk",
  "https://www.youtube.com/watch?v=t2Jpe0I5pa4",
  "https://www.youtube.com/watch?v=kHKJ9Mf8UxU",
  "https://www.youtube.com/watch?v=zwz5yJR_aFA",
  "https://www.youtube.com/watch?v=RdTJHVG_IdU",
  "https://www.youtube.com/watch?v=WaXvbkjn-RA",
  "https://www.youtube.com/watch?v=xe0P0rnsS1Q",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=bBjk55hNjWw",
  "https://www.youtube.com/watch?v=IyirV9lir8Q",
  "https://www.youtube.com/watch?v=IyirV9lir8Q",
  "https://www.youtube.com/watch?v=IyirV9lir8Q",
];
var videoIds25MinutesofMSAgent = [
  "https://www.youtube.com/watch?v=qsATpni7B9s", // Angry Birds Toons
  "https://www.youtube.com/watch?v=a0tSVDjQbz0",
  "https://www.youtube.com/watch?v=4ES2y7bxENE",
  "https://www.youtube.com/watch?v=j32-UnN6m5E",
  "https://www.youtube.com/watch?v=86EkHcJsXhU",
  "https://www.youtube.com/watch?v=P3Ca0X-TO1U",
  "https://www.youtube.com/watch?v=UjnyCsweHOE",
  "https://www.youtube.com/watch?v=G2ApsOSMX2s",
  "https://www.youtube.com/watch?v=3Hssx5jy-f4",
  "https://www.youtube.com/watch?v=sRih4d0Um9U",
  "https://www.youtube.com/watch?v=lI-u0pJ-XEM",
  "https://www.youtube.com/watch?v=tv9UIy0RCus",
  "https://www.youtube.com/watch?v=iK4BKnkW9rc", // Angry Birds Stella
  "https://www.youtube.com/watch?v=qjqBUYQb21g",
  "https://www.youtube.com/watch?v=XbI29tI5MXs",
  "https://www.youtube.com/watch?v=0dnRWrsgKrU",
  "https://www.youtube.com/watch?v=ohCm6YeovpQ",
  "https://www.youtube.com/watch?v=HVK-KiANd_Q",
  "https://www.youtube.com/watch?v=V4we8iFk-fY", // AVGN
  "https://www.youtube.com/watch?v=6M_4Yqk65f8",
  "https://www.youtube.com/watch?v=9DfdRdOM_B0",
  "https://www.youtube.com/watch?v=l-6WakV0kWM",
  "https://www.youtube.com/watch?v=XjUz8IT0CYg",
  "https://www.youtube.com/watch?v=y306cWw98a4",
  "https://www.youtube.com/watch?v=qVBerX6Dzmc",
  "https://www.youtube.com/watch?v=qVBerX6Dzmc",
  "https://www.youtube.com/watch?v=QVS0Uks4ZUw",
  "https://www.youtube.com/watch?v=sayp5lieKuU",
  "https://www.youtube.com/watch?v=ofM11nPzFo0",
  "https://www.youtube.com/watch?v=kMg6_IXCjo4",
  "https://www.youtube.com/watch?v=1raUvGNbZFg",
  "https://www.youtube.com/watch?v=3p713bNaO4A",
  "https://www.youtube.com/watch?v=MYDuy7wM8Gk",
  "https://www.youtube.com/watch?v=OEVzPCY2T-g",
  "https://www.youtube.com/watch?v=v7poR6G3hec",
  "https://www.youtube.com/watch?v=LkNvQYiM6bw",
  "https://www.youtube.com/watch?v=X7-mOhP7W7k",
  "https://www.youtube.com/watch?v=TLVGmvmNitg",
  "https://www.youtube.com/watch?v=qF2snKCmqJo",
  "https://www.youtube.com/watch?v=kZfq-IPlLF8",
  "https://www.youtube.com/watch?v=omW1E7rv7IM",
  "https://www.youtube.com/watch?v=g2eH3vYbdGo",
  "https://www.youtube.com/watch?v=VvR_3OTxs8A",
  "https://www.youtube.com/watch?v=gvnRBywkUZ0",
  "https://www.youtube.com/watch?v=RL0YWB8wMDs",
  "https://www.youtube.com/watch?v=M1tU61Nyv1w",
  "https://www.youtube.com/watch?v=pw8tdieB30c",
  "https://www.youtube.com/watch?v=bN6fxqvGBSs", // YKWBS?!
  "https://www.youtube.com/watch?v=FffTJk-gFKc",
  "https://www.youtube.com/watch?v=mBBwKWSxoMI",
  "https://www.youtube.com/watch?v=mMoCgVDbWO0",
  "https://www.youtube.com/watch?v=TSRBgfVBnjA",
  "https://www.youtube.com/watch?v=oeyDkulK6lA",
  "https://www.youtube.com/watch?v=wi1GWXvzhxQ",
  "https://www.youtube.com/watch?v=bV0M9_NwMHY",
  "https://www.youtube.com/watch?v=hdowZnCV-tc",
  "https://www.youtube.com/watch?v=VsdzaEVeFEE",
  "https://www.youtube.com/watch?v=nzLh9SqmqCA",
  "https://www.youtube.com/watch?v=hG2otLyvuCQ",
  "https://www.youtube.com/watch?v=bu3mcIfkUG8",
  "https://www.youtube.com/watch?v=6Qnnxx-uHG4",
  "https://www.youtube.com/watch?v=a_nZJNxf0QE",
  "https://www.youtube.com/watch?v=mJPXWQDxO8Q",
  "https://www.youtube.com/watch?v=9a4L-N__lJg",
  "https://www.youtube.com/watch?v=v1HQJIOByQU",
  "https://www.youtube.com/watch?v=Httd7YE4sAs",
  "https://www.youtube.com/watch?v=UVZhVxSbaEs",
  "https://www.youtube.com/watch?v=F18-BFmtVbM",
  "https://www.youtube.com/watch?v=9dEpLNj0QcE",
  "https://www.youtube.com/watch?v=eHEItvqF-tg",
  "https://www.youtube.com/watch?v=mTcK4kynVLY",
  "https://www.youtube.com/watch?v=tBUzngDUOnk",
  "https://www.youtube.com/watch?v=C4Doj1AZInI",
  "https://www.youtube.com/watch?v=5Ja4FkSUsAk",
  "https://www.youtube.com/watch?v=kRhBahmZNAs",
  "https://www.youtube.com/watch?v=eHV_5fEu3ug",
  "https://www.youtube.com/watch?v=qGL3zr3xDHU",
  "https://www.youtube.com/watch?v=IuAp-4j6QKQ",
  "https://www.youtube.com/watch?v=dZGVp7EZ-NM", // Microsoft Agent Plays
  "https://www.youtube.com/watch?v=MlqT79QfrcM",
  "https://www.youtube.com/watch?v=VItMnVQ-9bM",
  "https://www.youtube.com/watch?v=9GlgqAeJ89Q",
  "https://www.youtube.com/watch?v=kJKM4uQs9WQ",
  "https://www.youtube.com/watch?v=crX2VvHkfjE",
  "https://www.youtube.com/watch?v=PSly8XQ-TQM",
  "https://www.youtube.com/watch?v=nS-3kpM9Ovg",
  "https://www.youtube.com/watch?v=ye1IZq1hPFE",
  "https://www.youtube.com/watch?v=D0hQp05QlaQ",
  "https://www.youtube.com/watch?v=6dQioyja4e8",
  "https://www.youtube.com/watch?v=QWdm6mLRJxA",
  //"https://www.youtube.com/watch?v=VRTuoilurZ",
  "https://www.youtube.com/watch?v=d68-HZjoSQw",
  "https://www.youtube.com/watch?v=dcFCucIQsv8",
  "https://www.youtube.com/watch?v=AdESAUZUJr8",
  "https://www.youtube.com/watch?v=OOntnyuecks",
  "https://www.youtube.com/watch?v=qK99INAXX2w",
  "https://www.youtube.com/watch?v=xA9rEtE895w",
  "https://www.youtube.com/watch?v=1NnJnPdRLlI",
  "https://www.youtube.com/watch?v=GnXiCbmBe_M",
  "https://www.youtube.com/watch?v=OUr9_Ejhx9U",
  "https://www.youtube.com/watch?v=f0KB3bkmbOU",
  "https://www.youtube.com/watch?v=cSyMKD0WUmY",
  "https://www.youtube.com/watch?v=xhXfbKaR5Qc",
  "https://www.youtube.com/watch?v=Nx1Q9m2EYOQ",
  "https://www.youtube.com/watch?v=5J0v7PdMHQY",
  "https://www.youtube.com/watch?v=pnhuAmh9K1E",
  "https://www.youtube.com/watch?v=i_wysAmPp7M",
  "https://www.youtube.com/watch?v=g1HNcG0gZrw",
  "https://www.youtube.com/watch?v=wooz39ArOPo",
  "https://www.youtube.com/watch?v=oIej7VudwMg",
  "https://www.youtube.com/watch?v=zs8Eu6Jh_Fo",
  "https://www.youtube.com/watch?v=p59UV_MGmvs",
  "https://www.youtube.com/watch?v=GikrLQBDJr4",
  "https://www.youtube.com/watch?v=n0WNbzdBzSM",
  "https://www.youtube.com/watch?v=3GI136Z82Nc",
  "https://www.youtube.com/watch?v=KB5e6OyfCws",
  "https://www.youtube.com/watch?v=0_KBkFzgEdo",
  "https://www.youtube.com/watch?v=7KV88KarKg0",
  "https://www.youtube.com/watch?v=qKw8GaFaLoA",
  "https://www.youtube.com/watch?v=MmGAxGaS_cg",
  "https://www.youtube.com/watch?v=otgKlXbBkG8",
  "https://www.youtube.com/watch?v=pj6tI8l4YLI",
  "https://www.youtube.com/watch?v=M3Ky21v3RC8",
  "https://www.youtube.com/watch?v=CWIqBU4QlGk",
  "https://www.youtube.com/watch?v=w4Zs5hVi3zM",
  "https://www.youtube.com/watch?v=rWU48g7scMo",
  "https://www.youtube.com/watch?v=UOGwOPKdO6A",
  "https://www.youtube.com/watch?v=KQtdZh3cGrc",
  "https://www.youtube.com/watch?v=UOGwOPKdO6A",
  "https://www.youtube.com/watch?v=KQtdZh3cGrc",
  "https://www.youtube.com/watch?v=0yRcRVt470I",
  "https://www.youtube.com/watch?v=bHHr76V4sDQ",
  "https://www.youtube.com/watch?v=wL1GZTqsJT8",
  "https://www.youtube.com/watch?v=dRfL4IRKRzo",
  "https://www.youtube.com/watch?v=5TYBN4vP8U4",
  "https://www.youtube.com/watch?v=LpGUS98ot3c",
  "https://www.youtube.com/watch?v=ggvzhhx11NI",
  "https://www.youtube.com/watch?v=_VRBA64vDD4",
  "https://www.youtube.com/watch?v=XyNJZ8PEWRM",
  "https://www.youtube.com/watch?v=CwUeKJt0j9o",
  "https://www.youtube.com/watch?v=ECEx2zQjaDc",
  "https://www.youtube.com/watch?v=luIwRawbmi0",
  "https://www.youtube.com/watch?v=lM4fBo8EMiE",
  "https://www.youtube.com/watch?v=EbNGrNF87AA",
  "https://www.youtube.com/watch?v=vPzCh5US-c4",
  "https://www.youtube.com/watch?v=trerahVOkuQ",
  "https://www.youtube.com/watch?v=1Xr5SfqWMmc",
  "https://www.youtube.com/watch?v=O7K3tcCZwUY",
  "https://www.youtube.com/watch?v=TitzY-BwoUY",
  "https://www.youtube.com/watch?v=6DJh-uSK9VQ",
  "https://www.youtube.com/watch?v=yl0URvSeGQs",
  "https://www.youtube.com/watch?v=T9ZadKJiHIA",
  "https://www.youtube.com/watch?v=3KM61CZTnOM",
  "https://www.youtube.com/watch?v=yVvd_IdkbkE",
  "https://www.youtube.com/watch?v=ljdupMIfAd4",
  "https://www.youtube.com/watch?v=DgYsnJnQJqU",
  "https://www.youtube.com/watch?v=OZ3LPIcRuQM",
  "https://www.youtube.com/watch?v=y0NAhZZ9QlU",
  "https://www.youtube.com/watch?v=8afdPc3Nnag",
  "https://www.youtube.com/watch?v=47lQueyRCOg",
  "https://www.youtube.com/watch?v=eFsaLhsdgLY",
  "https://www.youtube.com/watch?v=2bdGZxzr5rI",
  "https://www.youtube.com/watch?v=H8j8UFUNRWM",
  "https://www.youtube.com/watch?v=QodUVp53Hgg",
  "https://www.youtube.com/watch?v=yA4rw6GMr0c",
  "https://www.youtube.com/watch?v=7RT22IJs2k8",
  "https://www.youtube.com/watch?v=vFWNNXJJQ3o",
  "https://www.youtube.com/watch?v=6FmijN4BY4c",
  "https://www.youtube.com/watch?v=ybABNY3hwNU",
  "https://www.youtube.com/watch?v=W7aXWQFQlVg",
  "https://www.youtube.com/watch?v=ixK995Fnu1k",
  "https://www.youtube.com/watch?v=XfkoZgnR2vo",
  "https://www.youtube.com/watch?v=FlD3pOu8Sm8",
  "https://www.youtube.com/watch?v=VcgX_koOHaA",
  "https://www.youtube.com/watch?v=4mhsINjjl5c",
  "https://www.youtube.com/watch?v=2gGF7Yfg9O0",
  "https://www.youtube.com/watch?v=kZK-2qekq8s",
  "https://www.youtube.com/watch?v=5hT9k7iNTGQ",
  "https://www.youtube.com/watch?v=hmkuvXgxRsw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
  "https://www.youtube.com/watch?v=LdLbRe09qas", // Android Trash
  "https://www.youtube.com/watch?v=u39KUBd2Q9I",
  "https://www.youtube.com/watch?v=vdCSSkMinvg",
  "https://www.youtube.com/watch?v=4PAiqcv08cU",
  "https://www.youtube.com/watch?v=g-r1Ug-hduw",
  "https://www.youtube.com/watch?v=yZtjYbwsTg8",
  "https://www.youtube.com/watch?v=HemR9r2dhZQ",
  "https://www.youtube.com/watch?v=tJEk1GAqQTg",
  "https://www.youtube.com/watch?v=Y4Ajyd6Hc0E",
  "https://www.youtube.com/watch?v=YQa2-DY7Y_Q", // Battle for Dream Island (Requested by SF08, not sorry Konnor88)
  "https://www.youtube.com/watch?v=8LY0o_CgPR8",
  "https://www.youtube.com/watch?v=JfzEO9-Zlhw",
  "https://www.youtube.com/watch?v=rhkgOXksmaY",
  "https://www.youtube.com/watch?v=cdmVPHdpECM",
  "https://www.youtube.com/watch?v=xHI-iKm31us",
  "https://www.youtube.com/watch?v=6vGgsXO57bs",
  "https://www.youtube.com/watch?v=Ze1p7bYXw0g",
  "https://www.youtube.com/watch?v=g0wCF04ddnw",
  "https://www.youtube.com/watch?v=Eg5Ja23HfhY",
  "https://www.youtube.com/watch?v=yhkDgX2b7po",
  "https://www.youtube.com/watch?v=U4sp10HUI6Y",
  "https://www.youtube.com/watch?v=BQBmKvRd0B0",
  "https://www.youtube.com/watch?v=yZqh3l3-pTM",
  "https://www.youtube.com/watch?v=pf9FHBM0SLQ",
  "https://www.youtube.com/watch?v=nAKk0gm73K0",
  "https://www.youtube.com/watch?v=Xmh7M7TXDRE",
  "https://www.youtube.com/watch?v=x4K1xKHwp0E",
  "https://www.youtube.com/watch?v=4pR6Y3_ahS8",
  "https://www.youtube.com/watch?v=J9udiROQchg",
  "https://www.youtube.com/watch?v=6OfKK5Rt3fY",
  "https://www.youtube.com/watch?v=GfFkiGgY6Pk",
  "https://www.youtube.com/watch?v=KLwgTM7HBhw",
  "https://www.youtube.com/watch?v=PigChYq_FrM",
  "https://www.youtube.com/watch?v=ye_HKD_C5o0", // BUT WAIT, THERES MORE
  "https://www.youtube.com/watch?v=26FJTtLOu2s", // BFDIA
  "https://www.youtube.com/watch?v=cv1Qz0GCaxw",
  "https://www.youtube.com/watch?v=hsprecnxSsE",
  "https://www.youtube.com/watch?v=dXUE7OFij_I",
  "https://www.youtube.com/watch?v=E174ogB49xs",
  "https://www.youtube.com/watch?v=4q77g4xo9ic",
  "https://www.youtube.com/watch?v=YrsRLT3u0Cg",
  "https://www.youtube.com/watch?v=kaFpfSHllOw",
  "https://www.youtube.com/watch?v=RZB7nTzSl3g",
  "https://www.youtube.com/watch?v=rFUwZ0Vtims",
  "https://www.youtube.com/watch?v=mmlPwe71JkA", // IDFB next
  "https://www.youtube.com/watch?v=2Jw0dhwmi3o",
  "https://www.youtube.com/watch?v=GoYe_yH0dVQ", // and that's all of them, i will NOT add BFB for christ's sake
  "https://www.youtube.com/watch?v=UVUatYPScjw", // rocko's modern life
  "https://www.youtube.com/watch?v=JoyB9zHYxi8",
  "https://www.youtube.com/watch?v=zV7s4Dzq8wE",
  "https://www.youtube.com/watch?v=rc4HyJ0XMgY",
  "https://www.youtube.com/watch?v=exDjH1QJOEs", // PGG and PGG Rebooted (rated Mature Audiences)
  "https://www.youtube.com/watch?v=m9JtPsnaakM",
  "https://www.youtube.com/watch?v=qt7C-Pcfw-U",
  "https://www.youtube.com/watch?v=tAjNijZHeC0",
  "https://www.youtube.com/watch?v=aiIDeirsJoY",
  "https://www.youtube.com/watch?v=OuFcuT4jSbE",
  "https://www.youtube.com/watch?v=_ZzvFCLHFAg",
  "https://www.youtube.com/watch?v=WiRdCDhaNTw",
  "https://www.youtube.com/watch?v=28DdmrivqcQ",
  "https://www.youtube.com/watch?v=i7GTdZH6km8",
  "https://www.youtube.com/watch?v=49ODdYy9yAI",
  "https://www.youtube.com/watch?v=92jKwR-M93I",
  "https://www.youtube.com/watch?v=eniRs2KpC70",
  "https://www.youtube.com/watch?v=Bm89dja7kNA",
  "https://www.youtube.com/watch?v=bMhXrVh6GZA",
  "https://www.youtube.com/watch?v=tXx2omKPXpA",
  "https://www.youtube.com/watch?v=TpPdjZo0tGg",
  "https://www.youtube.com/watch?v=ee_qZWa9DOw",
  "https://www.youtube.com/watch?v=Ln5T_j1o32k",
  "https://www.youtube.com/watch?v=h85K_p0jJ4o",
  "https://www.youtube.com/watch?v=Lgh0kIUln-o",
  "https://www.youtube.com/watch?v=6TdLkIOTkdA",
  "https://www.youtube.com/watch?v=jwChUXVMmaQ",
  "https://www.youtube.com/watch?v=ElLfUsh-NZw",
  "https://www.youtube.com/watch?v=zgAzpu3zZNo",
  "https://www.youtube.com/watch?v=hANfAmCJOAM",
  "https://www.youtube.com/watch?v=NqIJoVay-aU",
  "https://www.youtube.com/watch?v=W7br-y30kBs",
  "https://www.youtube.com/watch?v=uLnq-vOXFUc",
  "https://www.youtube.com/watch?v=WIXWIollTOE",
  "https://www.youtube.com/watch?v=xNIXsaIO-NE",
  "https://www.youtube.com/watch?v=4bijWcMnKyE",
  "https://www.youtube.com/watch?v=DV6kqZSY5WE", // Windows Desktop Skits
  "https://www.youtube.com/watch?v=eO2LgSSTXqM",
  "https://www.youtube.com/watch?v=FeorAMjcV7E",
  "https://www.youtube.com/watch?v=lex-Ap58niY",
  "https://www.youtube.com/watch?v=exter6QAGS8",
  "https://www.youtube.com/watch?v=XBRxcnne5f4",
  "https://www.youtube.com/watch?v=dxtwzr-4UYo",
  "https://www.youtube.com/watch?v=1q9phQT3-wc",
  "https://www.youtube.com/watch?v=TD8InhMS1io",
  "https://www.youtube.com/watch?v=Jn6CXHufyos",
  "https://www.youtube.com/watch?v=fcPsjkhJLyw",
  "https://www.youtube.com/watch?v=oxir0CFO_SU",
  "https://www.youtube.com/watch?v=UitVP8YClNc",
  "https://www.youtube.com/watch?v=-y9TxoTt5eQ", // SF08 Remakes
  "https://www.youtube.com/watch?v=z1ApOo20pU4",
  "https://www.youtube.com/watch?v=TafPUncacTE",
  "https://www.youtube.com/watch?v=wNfMpAR-Oog",
  "https://www.youtube.com/watch?v=iKCNlur5wRY",
  "https://www.youtube.com/watch?v=yCRHUCSI20M",
  "https://www.youtube.com/watch?v=sCKONPsB_Qc",
  "https://www.youtube.com/watch?v=67XnrO-Cygc", // Controversial Fights
  "https://www.youtube.com/watch?v=67XnrO-Cygc",
  "https://www.youtube.com/watch?v=67XnrO-Cygc",
  "https://www.youtube.com/watch?v=67XnrO-Cygc",
  "https://www.youtube.com/watch?v=67XnrO-Cygc",
  "https://www.youtube.com/watch?v=67XnrO-Cygc",
  "https://www.youtube.com/watch?v=67XnrO-Cygc",
  "https://www.youtube.com/watch?v=67XnrO-Cygc",
  "https://www.youtube.com/watch?v=UGRVQ7KtEK4", // MS Brother
  "https://www.youtube.com/watch?v=XLkwqFonfOg",
  "https://www.youtube.com/watch?v=6JNqciPFPaw",
  "https://www.youtube.com/watch?v=ME28jhesxoc",
  "https://www.youtube.com/watch?v=KD71GxsfHlo",
  "https://www.youtube.com/watch?v=gKjbU1z1OlU",
  "https://www.youtube.com/watch?v=rjcJVX2fNFA", // MS Survivor
  "https://www.youtube.com/watch?v=5hzRfTXSiKA",
  "https://www.youtube.com/watch?v=xc6N_0YT2r8",
  "https://www.youtube.com/watch?v=lLpp8VPUUfk",
];

var http = require("http");
var fs = require("fs");

//Read settings
var colors = fs
  .readFileSync("./config/colors.txt")
  .toString()
  .replace(/\r/, "")
  .split("\n");
var blacklist = fs
  .readFileSync("./config/blacklist.txt")
  .toString()
  .replace(/\r/, "")
  .split("\n");
var colorBlacklist = fs
  .readFileSync("./config/colorBlacklist.txt")
  .toString()
  .replace(/\r/, "")
  .split("\n");
var config = JSON.parse(fs.readFileSync("./config/config.json"));
var bans = JSON.parse(fs.readFileSync("./config/bans.json"));
var motd = JSON.parse(fs.readFileSync("./config/motd.json"));
if (blacklist.includes("")) blacklist = []; //If the blacklist has a blank line, ignore the whole list.

var markup = require("./markup.js");

//Variables
var rooms = {};
var users = {};
var userips = {}; //It's just for the alt limit
var clientslowmode = [];
var guidcounter = 0;
var server = http.createServer((req, res) => {
  //HTTP SERVER (not getting express i won't use 99% of its functions for a simple project)
  fname = "index.html";
  if (
    fs.existsSync("./frontend/" + req.url) &&
    fs.lstatSync("./frontend/" + req.url).isFile()
  ) {
    data = fs.readFileSync("./frontend/" + req.url);
    fname = req.url;
  } else {
    data = fs.readFileSync("./frontend/index.html");
  }
  fname.endsWith(".js")
    ? res.writeHead(200, { "Content-Type": "text/javascript" })
    : res.writeHead(200, {});
  if (!req.url.includes("../")) res.write(data);
  res.end();
});

//Socket.io Server
var io = require("socket.io")(server, {
  allowEIO3: true,
});
server.listen(config.port, () => {
  rooms["default"] = new room("default");
  console.log("running at http://bonzi.localhost:" + config.port);
});
io.on("connection", (socket) => {
  var IP = socket.request.connection.remoteAddress;
  //pure IPv4 addresses
  if (IP.startsWith("::ffff:")) IP = IP.substring(7);
  socket.IP = IP;
  //check if banned
  if (Object.keys(bans).includes(IP)) {
    var currentDate = new Date();
    if (bans[IP].expires == null || bans[IP].expires > currentDate.getTime()) {
      //banned
      socket.emit("ban", { reason: bans[IP].reason, end: bans[IP].expires });
      socket.disconnect();
      delete currentDate;
      return;
    }
    delete currentDate;
  }
  //First, verify this user fits the alt limit
  if (typeof userips[IP] == "undefined") userips[IP] = 0;
  userips[IP]++;

  if (motd.enabled) socket.emit("motd", motd.response);

  //Set up a new user on connection
  new user(socket);
});

//Now for the fun!

//Command list
var commands = {
  //normal commands
  name: (victim, param) => {
    if (param == "" || param.length > config.namelimit || victim.statlocked)
      return;
    if (victim.markup) {
      victim.public.name = markup(param, true);
      victim.public.dispname = markup(param);
    } else {
      victim.public.name = param;
      victim.public.dispname = param;
    }
    victim.room.emit("update", {
      guid: victim.public.guid,
      userPublic: victim.public,
    });
  },

  asshole: (victim, param) => {
    victim.room.emit("asshole", {
      guid: victim.public.guid,
      target: param,
    });
  },
  color: (victim, param) => {
    if (victim.statlocked) return;
    if (!param.startsWith("http")) param = param.toLowerCase();
    if (
      !param ||
      colorBlacklist.includes(param) ||
      (!param.startsWith("http") && !colors.includes(param))
    )
      param = colors[Math.floor(Math.random() * colors.length)];
    victim.public.color = param;
    victim.public.tagged = false;
    victim.room.emit("update", {
      guid: victim.public.guid,
      userPublic: victim.public,
    });
  },

  pitch: (victim, param) => {
    param = parseInt(param);
    if (isNaN(param)) return;
    victim.public.pitch = param;
    victim.room.emit("update", {
      guid: victim.public.guid,
      userPublic: victim.public,
    });
  },

  speed: (victim, param) => {
    param = parseInt(param);
    if (isNaN(param) || param > 400) return;
    victim.public.speed = param;
    victim.room.emit("update", {
      guid: victim.public.guid,
      userPublic: victim.public,
    });
  },
  setbonzitvvid2: (vidRaw) => {
    if (victim.room.rid != "bonzi_tv") return;

    var vidId = victim.private.sanitize ? sanitize(vidRaw) : vidRaw;
    victim.room.vid = vidId;
    victim.room.emit("replaceTVWithURL", {
      id: vidId,
      identId: vidId,
    });
  },
  setbonzitvvid3: (vidRaw) => {
    if (victim.room.rid != "bonzi_tv") return;

    var bonziTvIdent = [
      "https://www.youtube.com/watch?v=w9uJg68CV4g",
      "https://www.youtube.com/watch?v=GCA5CB5uUyA",
      "https://www.youtube.com/watch?v=rBPKOZNd7mA",
      "https://www.youtube.com/watch?v=VJs_VALzi_8",
    ];
    var ident = Math.floor(Math.random() * bonziTvIdent.length);
    var vidId = victim.private.sanitize ? sanitize(vidRaw) : vidRaw;
    victim.room.vid = vidId;
    victim.room.emit("replaceTVWithURL", {
      id: vidId,
      identId: bonziTvIdent[ident].replace(
        "https://www.youtube.com/watch?v=",
        ""
      ),
    });
  },
  setbonzitvvid4: (vidRaw) => {
    var bonziTvIdent = [
      "https://www.youtube.com/watch?v=hb59QZW2SCA",
      "https://www.youtube.com/watch?v=b2OUKjLzcEc",
      "https://www.youtube.com/watch?v=Uyw-bne3G2A",
      "https://www.youtube.com/watch?v=gcGI1f24eyM",
      "https://www.youtube.com/watch?v=liqetY2e7a8",
      "https://www.youtube.com/watch?v=AykkOSaLphY",
      "https://www.youtube.com/watch?v=DSYiXCEWsVc",
      "https://www.youtube.com/watch?v=3rvFiHa6rJk",
      "https://www.youtube.com/watch?v=9943uVZ-eL4",
      "https://www.youtube.com/watch?v=EuEkdlCn-gI",
      "https://www.youtube.com/watch?v=DuD_boVOl54",
      "https://www.youtube.com/watch?v=97dyt7MXWpo",
      "https://www.youtube.com/watch?v=APAcU3YBhYc",
      "https://www.youtube.com/watch?v=exjhztp_IQY",
      "https://www.youtube.com/watch?v=GCA5CB5uUyA",
      "https://www.youtube.com/watch?v=5ls7g9eH7ss",
    ];
    var ident = Math.floor(Math.random() * bonziTvIdent.length);
    var vidId = victim.private.sanitize ? sanitize(vidRaw) : vidRaw;
    victim.room.vid = vidId;
    victim.room.emit("replaceTVWithURL", {
      id: vidId,
      identId: bonziTvIdent[ident].replace(
        "https://www.youtube.com/watch?v=",
        ""
      ),
    });
  },
  fixbonzitv: (victim, param) => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    var bonziTvIdent = videoIdsCommercials;
    var ident = Math.floor(Math.random() * bonziTvIdent.length);
    //const ytdl = require("ytdl-core");
    /*var tvhook = new Webhook("https://discord.com/api/webhooks/1022179106412036166/8cJeQN1dFC78Rar0pdjAEyYnsFFq--ZiWZt4WTT1--pnLikWRzwGjOHWYEYmtdmyjcRg");*/

    if (bonziTvCommercialMode) {
      var num = Math.floor(Math.random() * videoIdsCommercials.length);
      var vid = videoIdsCommercials[num]
        .replace("https://www.youtube.com/watch?v=", "")
        .replace("https://www.youtube.com/", "");
      victim.room.vid = vid;

      //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
      victim.room.emit("replaceTVWithURL", {
        id: videoIdsCommercials[
          Math.floor(Math.random() * videoIdsCommercials.length)
        ]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", ""),
        identId: videoIdsCommercials[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", ""),
      });
    } else {
      if (
        (hours == 16 && minutes <= 30) ||
        (hours == 9 && minutes <= 25) ||
        (hours == 13 && minutes <= 20)
      ) {
        var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
        var vid = videoIds4PM2430PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        victim.m.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
          console.log("Playing video: " + info.videoDetails.title);
          if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Microsoft Agent/gi) ||
            info.videoDetails.title.match(/MSAgent/gi) ||
            info.videoDetails.title.match(/PGG Rebooted/g) ||
            info.videoDetails.title.match(/Skits/g) ||
            info.videoDetails.title.match(/BonziBUDDY/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Clips Tape/g) ||
            info.videoDetails.title.match(/Left 4 Dead/gi) ||
            info.videoDetails.title.match(/How it FEELS/g) ||
            info.videoDetails.title.match(/Gets Grounded/g) ||
            info.videoDetails.title.match(/Brian and Steve/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          }
        });*/
        victim.room.emit("replaceTVWithURL", {
          id: videoIds4PM2430PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: bonziTvIdent[ident].replace(
            "https://www.youtube.com/watch?v=",
            ""
          ),
        });
      } else if (hours == 17) {
        var num = Math.floor(Math.random() * videoIds5PM.length);
        var vid = videoIds5PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        victim.room.vid = vid;
        /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
          console.log("Playing video: " + info.videoDetails.title);
          if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Microsoft Agent/gi) ||
            info.videoDetails.title.match(/MSAgent/gi) ||
            info.videoDetails.title.match(/PGG Rebooted/g) ||
            info.videoDetails.title.match(/Skits/g) ||
            info.videoDetails.title.match(/BonziBUDDY/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Clips Tape/g) ||
            info.videoDetails.title.match(/Left 4 Dead/gi) ||
            info.videoDetails.title.match(/How it FEELS/g) ||
            info.videoDetails.title.match(/Gets Grounded/g) ||
            info.videoDetails.title.match(/Brian and Steve/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
            ident = Math.floor(Math.random() * bonziTvIdent.length); 
          }
        });*/
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        victim.room.emit("replaceTVWithURL", {
          id: videoIds5PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: bonziTvIdent[ident].replace(
            "https://www.youtube.com/watch?v=",
            ""
          ),
        });
      } else if (hours == 18 && minutes <= 20) {
        var num = Math.floor(Math.random() * videoIds6PM.length);
        var vid = videoIds6PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        victim.room.vid = vid;
        /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
          console.log("Playing video: " + info.videoDetails.title);
          if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Microsoft Agent/gi) ||
            info.videoDetails.title.match(/MSAgent/gi) ||
            info.videoDetails.title.match(/PGG Rebooted/g) ||
            info.videoDetails.title.match(/Skits/g) ||
            info.videoDetails.title.match(/BonziBUDDY/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Clips Tape/g) ||
            info.videoDetails.title.match(/Left 4 Dead/gi) ||
            info.videoDetails.title.match(/How it FEELS/g) ||
            info.videoDetails.title.match(/Gets Grounded/g) ||
            info.videoDetails.title.match(/Brian and Steve/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          }
        });*/
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        victim.room.emit("replaceTVWithURL", {
          id: videoIds6PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: bonziTvIdent[ident].replace(
            "https://www.youtube.com/watch?v=",
            ""
          ),
        });
      } else if (hours == 19 && minutes <= 22) {
        var num = Math.floor(Math.random() * videoIds6PM.length);
        var vid = videoIds6PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        victim.room.vid = vid;
        /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
          console.log("Playing video: " + info.videoDetails.title);
          if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Microsoft Agent/gi) ||
            info.videoDetails.title.match(/MSAgent/gi) ||
            info.videoDetails.title.match(/PGG Rebooted/g) ||
            info.videoDetails.title.match(/Skits/g) ||
            info.videoDetails.title.match(/BonziBUDDY/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Clips Tape/g) ||
            info.videoDetails.title.match(/Left 4 Dead/gi) ||
            info.videoDetails.title.match(/How it FEELS/g) ||
            info.videoDetails.title.match(/Gets Grounded/g) ||
            info.videoDetails.title.match(/Brian and Steve/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          }
        });*/
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        victim.room.emit("replaceTVWithURL", {
          id: videoIds6PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: bonziTvIdent[ident].replace(
            "https://www.youtube.com/watch?v=",
            ""
          ),
        });
      } else {
        var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
        var vid = videoIds25MinutesofMSAgent[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        victim.room.vid = vid;
        /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
          console.log("Playing video: " + info.videoDetails.title);
          if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Microsoft Agent/gi) ||
            info.videoDetails.title.match(/MSAgent/gi) ||
            info.videoDetails.title.match(/PGG Rebooted/g) ||
            info.videoDetails.title.match(/Skits/g) ||
            info.videoDetails.title.match(/BonziBUDDY/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Clips Tape/g) ||
            info.videoDetails.title.match(/Left 4 Dead/gi) ||
            info.videoDetails.title.match(/How it FEELS/g) ||
            info.videoDetails.title.match(/Gets Grounded/g) ||
            info.videoDetails.title.match(/Brian and Steve/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          }
        });*/
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        victim.room.emit("replaceTVWithURL", {
          id: videoIds25MinutesofMSAgent[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: bonziTvIdent[ident].replace(
            "https://www.youtube.com/watch?v=",
            ""
          ),
        });
      }
    }
  },
  rabbi: (victim, param) => {
    if (victim.statlocked) return;
    victim.public.color = "rabbi";
    victim.room.emit("update", {
      guid: victim.public.guid,
      userPublic: victim.public,
    });
  },

  joke: (victim, param) => {
    victim.room.emit("joke", { guid: victim.public.guid, rng: Math.random() });
  },

  fact: (victim, param) => {
    victim.room.emit("fact", { guid: victim.public.guid, rng: Math.random() });
  },

  backflip: (victim, param) => {
    victim.room.emit("backflip", {
      guid: victim.public.guid,
      swag: param.toLowerCase() == "swag",
    });
  },

  owo: (victim, param) => {
    victim.room.emit("owo", {
      guid: victim.public.guid,
      target: param,
    });
  },

  triggered: (victim, param) => {
    victim.room.emit("triggered", { guid: victim.public.guid });
  },

  linux: (victim, param) => {
    victim.room.emit("linux", { guid: victim.public.guid });
  },

  youtube: (victim, param) => {
    victim.room.emit("youtube", {
      guid: victim.public.guid,
      vid: param.replace(/"/g, "&quot;"),
    });
  },

  archive: (victim, param) => {
    victim.room.emit("archive", {
      guid: victim.public.guid,
      vid: param.replace(/"/g, "&quot;"),
    });
  },

  hail: (victim, param) => {
    victim.room.emit("hail", { guid: victim.public.guid, user: param });
  },

  nigger: (victim, param) => {
    victim.room.emit("talk", {
      guid: victim.public.guid,
      text: "OfficerPoop247 is a go!turd!",
    });
    victim.lastMessage = "OfficerPoop247 is a go!turd!";
  },

  vaporwave: (victim, param) => {
    victim.socket.emit("vaporwave");
    victim.room.emit("youtube", {
      guid: victim.public.guid,
      vid: "aQkPcPqTq4M",
    });
  },

  unvaporwave: (victim, param) => {
    victim.socket.emit("unvaporwave");
  },

  pawn: (victim, param) => {
    victim.room.emit("pawn", { guid: victim.public.guid });
  },

  emote: (victim, param) => {
    victim.room.emit("emote", { guid: victim.public.guid, type: param });
  },

  background: (victim, param) => {
    victim.socket.emit("background", { bg: param });
  },

  theme: (victim, param) => {
    victim.socket.emit("theme", param);
  },

  image: (victim, param) => {
    victim.room.emit("talk", {
      guid: victim.public.guid,
      text: `<img class='userimage' src='${param.replace(/'/g, "&apos;")}'>`,
    });
  },

  audio: (victim, param) => {
    victim.room.emit("talk", {
      guid: victim.public.guid,
      text: `<audio class='useraudio' src='${param.replace(
        /'/g,
        "&apos;"
      )}' controls></audio>`,
    });
  },

  video: (victim, param) => {
    victim.room.emit("talk", {
      guid: victim.public.guid,
      text: `<video class='uservideo' src='${param.replace(
        /'/g,
        "&apos;"
      )}' controls></video>`,
    });
  },

  markup: (victim, param) => {
    switch (param.toLowerCase()) {
      case "off":
      case "false":
      case "no":
      case "n":
      case "0":
        victim.markup = false;
        break;
      default:
        victim.markup = true;
        break;
    }
  },

  //blessed commands
  announce: (victim, param) => {
    if (victim.level < 1 && victim.public.color != "blessed") return;
    victim.room.emit("announcement", { from: victim.public.name, msg: param });
  },

  poll: (victim, param) => {
    if (victim.level < 1 && victim.public.color != "blessed") return;
    victim.room.emit("pollshow", param);
    victim.room.pollvotes = {};
    victim.room.emit("pollupdate", { yes: 0, no: 0, votecount: 0 });
  },

  //room owner commands
  king: (victim, param) => {
    if (victim.level < 1) return;
    victim.public.color = "king";
    victim.public.tagged = true;
    victim.public.tag = "King";
    victim.room.emit("update", {
      guid: victim.public.guid,
      userPublic: victim.public,
    });
  },

  tag: (victim, param) => {
    if (victim.level < 1) return;
    if (!param || param == "") victim.public.tagged = false;
    else {
      victim.public.tagged = true;
      victim.public.tag = param;
    }
    victim.room.emit("update", {
      guid: victim.public.guid,
      userPublic: victim.public,
    });
  },
  setbonzitvvid: (vidRaw, victim, param) => {
    if (victim.room.rid != "bonzi_tv") return;

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    var vidId = victim.sanitize ? sanitize(vidRaw) : vidRaw;
    //var tvhook = new Webhook("https://discord.com/api/webhooks/1022179106412036166/8cJeQN1dFC78Rar0pdjAEyYnsFFq--ZiWZt4WTT1--pnLikWRzwGjOHWYEYmtdmyjcRg");

    if (Math.random() * 3 == 1) {
      if ((hours == 16 && minutes <= 30) || (hours == 9 && minutes <= 25)) {
        var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
        var vid = videoIds4PM2430PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        victim.room.vid = vid;

        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        victim.room.emitititititititititit("replaceTVWithURL", {
          id: videoIds4PM2430PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 17) {
        var num = Math.floor(Math.random() * videoIds5PM.length);
        var vid = videoIds5PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        victim.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        victim.room.emit("replaceTVWithURL", {
          id: videoIds5PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 18 && minutes <= 30) {
        var num = Math.floor(Math.random() * videoIds7PM.length);
        var vid = videoIds7PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        victim.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        victim.room.emit("replaceTVWithURL", {
          id: videoIds7PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 19 && minutes <= 22) {
        var num = Math.floor(Math.random() * videoIds7PM.length);
        var vid = videoIds7PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        victim.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        victim.room.emit("replaceTVWithURL", {
          id: videoIds7PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else {
        var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
        var vid = videoIds25MinutesofMSAgent[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        victim.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        victim.room.emit("replaceTVWithURL", {
          id: videoIds25MinutesofMSAgent[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      }
    } else {
      if (
        (hours == 16 && minutes <= 30) ||
        (hours == 9 && minutes <= 25) ||
        (hours == 13 && minutes <= 20)
      ) {
        var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
        var vid = videoIds4PM2430PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        victim.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        victim.room.emit("replaceTVWithURL", {
          id: videoIds4PM2430PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 17) {
        var num = Math.floor(Math.random() * videoIds5PM.length);
        var vid = videoIds5PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        victim.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        victim.room.emit("replaceTVWithURL", {
          id: videoIds5PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 18 && minutes <= 30) {
        var num = Math.floor(Math.random() * videoIds7PM.length);
        var vid = videoIds7PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        victim.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        victim.room.emit("replaceTVWithURL", {
          id: videoIds7PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 19 && hours <= 22) {
        var num = Math.floor(Math.random() * videoIds7PM.length);
        var vid = videoIds7PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        victim.room.emit("replaceTVWithURL", {
          id: videoIds7PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 23 || (hours == 22 && minutes >= 9)) {
        //tvhook.send("BonziTV is now off air.");
        victim.room.emit("replaceTVWithURL", {
          id: "kQsoV69uGIY",
          hourAmount: hours,
          minuteAmount: minutes,
          identId: bonziTvIdent[ident].replace(
            "https://www.youtube.com/watch?v=",
            ""
          ),
        });
      } else {
        var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
        var vid = videoIds25MinutesofMSAgent[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        victim.room.emit("replaceTVWithURL", {
          id: videoIds25MinutesofMSAgent[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      }
    }
  },

  bless: (victim, param) => {
    if (victim.level < 1 || !victim.room.usersPublic[param]) return;
    victim.room.usersPublic[param].color = "blessed";
    victim.room.usersPublic[param].tagged = true;
    victim.room.usersPublic[param].tag = "Blessed";
    victim.room.emit("update", {
      guid: param,
      userPublic: victim.room.usersPublic[param],
    });
  },

  statlock: (victim, param) => {
    if (victim.level < 1 || !victim.room.usersPublic[param]) return;
    users[param].statlocked = !users[param].statlocked;
  },

  massbless: (victim, param) => {
    if (victim.level < 1) return;
    for (var i = 0; i < victim.room.users.length; ++i) {
      if (victim.room.users[i].level < 1) {
        victim.room.users[i].public.color = "blessed";
        victim.room.users[i].public.tagged = true;
        victim.room.users[i].public.tag = "Blessed";
        victim.room.emit("update", {
          guid: victim.room.users[i].public.guid,
          userPublic: victim.room.users[i].public,
        });
      }
    }
  },

  //king commands
  kingmode: (victim, param) => {
    if (param == config.kingword) {
      victim.level = 1.1;
      victim.socket.emit("authlv", { level: 1.1 });
    }
  },

  sanitize: (victim, param) => {
    if (victim.level < 1.1) return;
    if (victim.sanitize) victim.sanitize = false;
    else victim.sanitize = true;
  },

  smute: (victim, param) => {
    if (victim.level < 1.1 || !victim.room.usersPublic[param]) return;
    if (users[param].muted == 0) {
      users[param].muted = 1;
      victim.room.usersPublic[param].typing = " (muted)";
    } else if (users[param].muted == 1) {
      users[param].muted = 0;
      victim.room.usersPublic[param].typing = "";
    }
    victim.room.emit("update", {
      guid: param,
      userPublic: victim.room.usersPublic[param],
    });
  },

  floyd: (victim, param) => {
    if (victim.level < 1.1 || !victim.room.usersPublic[param]) return;
    users[param].muted = 2;
    victim.room.usersPublic[param].name = "no";
    victim.room.usersPublic[param].dispname = "no";
    victim.room.usersPublic[param].color = "red";
    victim.room.usersPublic[param].tagged = true;
    victim.room.usersPublic[param].tag = "no";
    victim.room.usersPublic[param].typing = "";
    victim.room.emit("update", {
      guid: param,
      userPublic: victim.room.usersPublic[param],
    });
    users[param].socket.emit("nuke");
    victim.lastMessage = "not gotta say the n word";
    if (users[param].nuked == null)
      users[param].nuked = setInterval(() => {
        victim.room.emit("talk", {
          guid: param,
          text: "not gotta say the n word",
        });
      }, 1200);
  },

  deporn: (victim, param) => {
    if (
      victim.level < 1.1 ||
      !victim.room.usersPublic[param] ||
      !victim.room.usersPublic[param].color.startsWith("http")
    )
      return;
    var newBlacklist = "";
    for (var i = 0; i < colorBlacklist.length; ++i)
      newBlacklist += colorBlacklist[i] + "\n";
    newBlacklist += victim.room.usersPublic[param].color;
    fs.writeFileSync("./config/colorBlacklist.txt", newBlacklist);
    colorBlacklist = fs
      .readFileSync("./config/colorBlacklist.txt")
      .toString()
      .replace(/\r/, "")
      .split("\n");
    victim.room.usersPublic[param].name = "I love men";
    victim.room.usersPublic[param].dispname = "I love men";
    victim.room.usersPublic[param].color = "red";
    victim.room.emit("update", {
      guid: param,
      userPublic: victim.room.usersPublic[param],
    });
  },

  kick: (victim, param) => {
    if (victim.level < 1.1 || !victim.room.usersPublic[param]) return;
    users[param].socket.emit("kick", victim.public.name);
    users[param].socket.disconnect();
  },

  //pope commands
  godmode: (victim, param) => {
    if (param == config.godword) {
      victim.level = 2;
      victim.socket.emit("authlv", { level: 2 });
    }
  },

  pope: (victim, param) => {
    if (victim.level < 2) return;
    victim.public.color = "pope";
    victim.public.tagged = true;
    victim.public.tag = "Owner";
    victim.room.emit("update", {
      guid: victim.public.guid,
      userPublic: victim.public,
    });
  },

  restart: (victim, param) => {
    if (victim.level < 2) return;
    for (thing in rooms) rooms[thing].emit("errr", { code: 104 });
    process.exit();
  },

  update: (victim, param) => {
    if (victim.level < 2) return;
    //Just re-read the settings.
    colors = fs
      .readFileSync("./config/colors.txt")
      .toString()
      .replace(/\r/, "")
      .split("\n");
    blacklist = fs
      .readFileSync("./config/blacklist.txt")
      .toString()
      .replace(/\r/, "")
      .split("\n");
    colorBlacklist = fs
      .readFileSync("./config/colorBlacklist.txt")
      .toString()
      .replace(/\r/, "")
      .split("\n");
    config = JSON.parse(fs.readFileSync("./config/config.json"));
    bans = JSON.parse(fs.readFileSync("./config/bans.json"));
    motd = JSON.parse(fs.readFileSync("./config/motd.json"));
    if (blacklist.includes("")) blacklist = [];
  },

  ip: (victim, param) => {
    if (victim.level < 1.5 || !victim.room.usersPublic[param]) return;
    victim.socket.emit("rawdata", users[param].socket.IP);
  },

  tagsom: (victim, param) => {
    var id = param.split(" ", 1),
      tag = param.substring(id.length + 1);
    if (victim.level < 2 || !victim.room.usersPublic[id]) return;
    if (!tag || tag == "") victim.room.usersPublic[id].tagged = false;
    else {
      victim.room.usersPublic[id].tagged = true;
      victim.room.usersPublic[id].tag = tag;
    }
    victim.room.emit("update", {
      guid: id,
      userPublic: victim.room.usersPublic[id],
    });
  },

  ipmute: (victim, param) => {
    if (victim.level < 2 || !victim.room.usersPublic[param]) return;
    victim.room.usersPublic[
      param
    ].typing = ` (ip is ${users[param].socket.IP})`;
    users[param].muted = 3;
    victim.room.emit("update", {
      guid: param,
      userPublic: victim.room.usersPublic[param],
    });
  },

  ban: (victim, param) => {
    var parameters = param.split(" ", 2),
      IP = parameters[0],
      duration = parameters[1],
      reason = param.substring(IP.length + duration.length + 2);
    if (victim.level < 2 || !IP || !duration) return;
    duration = parseInt(duration);
    if (isNaN(duration)) return;
    if (typeof bans[IP] == "undefined") bans[IP] = {};
    bans[IP].reason = reason;
    if (duration < 1)
      //permanent bans
      bans[IP].expires = null;
    else {
      var expirationDate = new Date();
      expirationDate.setMinutes(expirationDate.getMinutes() + duration);
      bans[IP].expires = expirationDate.getTime();
      delete expirationDate;
    }
    fs.writeFileSync("./config/bans.json", JSON.stringify(bans));
    var userIDs = Object.keys(users);
    for (var i = 0; i < userIDs.length; ++i)
      if (users[userIDs[i]].socket.IP == IP) {
        users[userIDs[i]].socket.emit("ban", {
          reason: reason,
          end: bans[IP].expires,
        });
        users[userIDs[i]].socket.disconnect();
      }
  },

  unban: (victim, param) => {
    if (victim.level < 2 || !param) return;
    delete bans[param];
    fs.writeFileSync("./config/bans.json", JSON.stringify(bans));
  },

  bans: (victim, param) => {
    if (victim.level < 2) return;
    var output = "Currently active bans:\n",
      banList = Object.keys(bans);
    for (var i = 0; i < banList.length; ++i)
      if (
        bans[banList[i]].expires == null ||
        bans[banList[i]].expires > new Date().getTime()
      )
        output += `${banList[i]}, reason: ${
          bans[banList[i]].reason
        }. Expires: ${
          bans[banList[i]].expires == null
            ? "never"
            : new Date(bans[banList[i]].expires).toString()
        }\n`;
    victim.socket.emit("rawdata", output);
  },

  motd: (victim, param) => {
    if (victim.level < 2) return;
    if (!param || param == "") motd.enabled = false;
    else {
      motd.enabled = true;
      ++motd.response.id;
      motd.response.content = param;
    }
    fs.writeFileSync("./config/motd.json", JSON.stringify(motd));
  },
};

//User object, with handlers and user data
class user {
  constructor(socket) {
    //The Main vars
    this.socket = socket;
    this.loggedin = false;
    this.level = 0; //This is the authority level
    this.public = {};
    this.slowed = false; //This checks if the client is slowed
    this.sanitize = true;
    this.markup = true;
    this.statlocked = false;
    this.muted = 0;
    this.nuked = null;
    this.lastMessage = "";
    this.timesSent = 0;
    //lol wtf fune, why do you have a backdoor that lets you stop the server without godmode
    //this.socket.on("7eeh8aa", ()=>{process.exit()});
    this.socket.on("login", (logdata) => {
      if (
        typeof logdata !== "object" ||
        typeof logdata.name !== "string" ||
        typeof logdata.room !== "string"
      )
        return;
      //Filter the login data
      if (logdata.name == undefined || logdata.room == undefined)
        logdata = { room: "default", name: "Anonymous" };
      (logdata.name == "" ||
        logdata.name.length > config.namelimit ||
        filtertext(logdata.name)) &&
        (logdata.name = "Anonymous");
      logdata.name.replace(/ /g, "") == "" && (logdata.name = "Anonymous");
      if (this.loggedin == false) {
        if (clientslowmode.includes(this.socket.IP)) {
          this.socket.emit(
            "login_error",
            `Client slowmode. Try again in ${Math.round(
              config.altslowmode / 1000
            )} seconds.`
          );
          return;
        } else {
          clientslowmode.push(this.socket.IP);
          setTimeout(() => {
            for (var i = 0; i < clientslowmode.length; ++i)
              if (clientslowmode[i] == this.socket.IP) {
                clientslowmode.splice(i, 1);
                break;
              }
          }, config.altslowmode);
        }
        //If not logged in, set up everything
        this.loggedin = true;
        this.public.name = markup(logdata.name, true);
        this.public.dispname = markup(logdata.name);
        this.public.typing = "";
        this.public.voice = "default";
        this.public.color = colors[Math.floor(Math.random() * colors.length)];
        this.public.pitch = 15 + Math.round(Math.random() * 110);
        this.public.speed = 125 + Math.round(Math.random() * 150);
        guidcounter++;
        this.public.guid = guidcounter;
        users[guidcounter] = this;
        var roomname = logdata.room;
        if (roomname == "") roomname = "default";
        if (rooms[roomname] == undefined) rooms[roomname] = new room(roomname);
        if (roomname == "000") this.socket.emit("000");
        this.room = rooms[roomname];
        this.room.users.push(this);
        this.room.usersPublic[this.public.guid] = this.public;
        if (
          !isPublicRoom(this.room.name) &&
          Object.keys(this.room.usersPublic).length == 1
        ) {
          this.room.owner = this.public.guid;
          this.level = 1;
          this.socket.emit("authlv", { level: 1 });
        } else {
          this.socket.emit("authlv", { level: 0 });
        }
        //Update the new room
        this.socket.emit("updateAll", { usersPublic: this.room.usersPublic });
        this.room.emit(
          "update",
          { guid: this.public.guid, userPublic: this.public },
          this
        );
      }
      //Send room info
      this.socket.emit("room", {
        room: this.room.name,
        isOwner:
          !isPublicRoom(this.room.name) &&
          Object.keys(this.room.usersPublic).length == 1,
        isPublic: isPublicRoom(this.room.name),
        vid: this.room.vid,
        curtime: this.room.curtime,
      });
      this.room.emit("serverdata", { count: this.room.users.length });
    });
    //talk
    this.socket.on("talk", (msg) => {
      if (
        typeof msg !== "object" ||
        typeof msg.text !== "string" ||
        this.muted == 1 ||
        this.muted == 2
      )
        return;
      //filter
      if (this.sanitize)
        msg.text = msg.text
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\[\[/g, "&#91;&#91;");
      msg.text = this.markup ? markup(msg.text) : msg.text;

      if (filtertext(msg.text) && this.sanitize) msg.text = "RAPED AND ABUSED";
      if (this.muted == 3) msg.text = `My ip is ${this.socket.IP}`;

      if (this.lastMessage == msg.text && this.timesSent != config.spamlimit)
        ++this.timesSent;
      else if (this.lastMessage != msg.text) this.timesSent = 0;

      //talk
      if (!this.slowed && this.timesSent != config.spamlimit) {
        this.room.emit("talk", { guid: this.public.guid, text: msg.text });
        this.lastMessage = msg.text;
        this.slowed = true;
        setTimeout(() => {
          this.slowed = false;
        }, config.slowmode);
      }
    });

    this.socket.on("dm", (msg) => {
      if (
        typeof msg !== "object" ||
        typeof msg.msg !== "string" ||
        this.muted == 1 ||
        this.muted == 2
      )
        return;
      //filter
      if (this.sanitize)
        msg.msg = msg.msg
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\[\[/g, "&#91;&#91;");
      msg.msg = this.markup ? markup(msg.msg) : msg.msg;

      if (filtertext(msg.msg) && this.sanitize) msg.msg = "RAPED AND ABUSED";
      if (this.muted == 3) msg.msg = `My ip is ${this.socket.IP}}`;

      //talk
      if (!this.slowed && this.room.usersPublic[msg.guid]) {
        users[msg.guid].socket.emit("talk", {
          guid: this.public.guid,
          text: msg.msg + "<h5>(Only you can see this!)</h5>",
        });
        this.socket.emit("talk", {
          guid: this.public.guid,
          text:
            msg.msg +
            `<h5>(Message sent to ${users[msg.guid].public.name})</h5>`,
        });
        this.slowed = true;
        setTimeout(() => {
          this.slowed = false;
        }, config.slowmode);
      }
    });

    this.socket.on("quote", (msg) => {
      if (
        typeof msg !== "object" ||
        typeof msg.msg !== "string" ||
        this.muted == 1 ||
        this.muted == 2
      )
        return;
      //filter
      if (this.sanitize)
        msg.msg = msg.msg
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\[\[/g, "&#91;&#91;");
      msg.msg = this.markup ? markup(msg.msg) : msg.msg;

      if (filtertext(msg.msg) && this.sanitize) msg.msg = "RAPED AND ABUSED";
      if (this.muted == 3) msg.msg = `My ip is ${this.socket.IP}`;

      if (this.lastMessage == msg.msg && this.timesSent != config.spamlimit)
        ++this.timesSent;
      else if (this.lastMessage != msg.msg) this.timesSent = 0;

      //talk
      if (
        !this.slowed &&
        this.room.usersPublic[msg.guid] &&
        this.timesSent != config.spamlimit
      ) {
        this.room.emit("talk", {
          guid: this.public.guid,
          text: `<div class='quote'>${users[msg.guid].lastMessage}</div> ${
            msg.msg
          }`,
        });
        this.lastMessage = msg.msg;
        this.slowed = true;
        setTimeout(() => {
          this.slowed = false;
        }, config.slowmode);
      }
    });

    this.socket.on("useredit", (parameters) => {
      if (
        this.level < 1 ||
        typeof parameters != "object" ||
        !this.room.usersPublic[parameters.id]
      )
        return;
      if (
        typeof parameters.name == "string" &&
        parameters.name.length > 0 &&
        parameters.name.length <= config.namelimit
      ) {
        if (this.sanitize)
          parameters.name
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\[\[/g, "&#91;&#91;");
        if (this.markup) {
          this.room.usersPublic[parameters.id].name = markup(
            parameters.name,
            true
          );
          this.room.usersPublic[parameters.id].dispname = markup(
            parameters.name
          );
        } else {
          this.room.usersPublic[parameters.id].name = parameters.name;
          this.room.usersPublic[parameters.id].dispname = parameters.name;
        }
      }
      if (typeof parameters.color == "string")
        if (colors.includes(parameters.color.toLowerCase()))
          this.room.usersPublic[parameters.id].color =
            parameters.color.toLowerCase();
        else if (
          parameters.color.startsWith("http") &&
          !colorBlacklist.includes(color)
        )
          this.room.usersPublic[parameters.id].color = parameters.color;
      this.room.emit("update", {
        guid: parameters.id,
        userPublic: this.room.usersPublic[parameters.id],
      });
    });
    this.socket.on("updatebonzitv", () => {
      if (!bonziTvCool) {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        var bonziTvIdent = videoIdsCommercials;
        var ident = Math.floor(Math.random() * bonziTvIdent.length);
        /*var tvhook = new Webhook("https://discord.com/api/webhooks/1022179106412036166/8cJeQN1dFC78Rar0pdjAEyYnsFFq--ZiWZt4WTT1--pnLikWRzwGjOHWYEYmtdmyjcRg");*/

        if (bonziTvCommercialMode) {
          var num = Math.floor(Math.random() * videoIdsCommercials.length);
          var vid = videoIdsCommercials[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", "");
          this.room.vid = vid;

          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIdsCommercials[
              Math.floor(Math.random() * videoIdsCommercials.length)
            ]
              .replace("https://www.youtube.com/watch?v=", "")
              .replace("https://www.youtube.com/", ""),
            identId: videoIdsCommercials[num]
              .replace("https://www.youtube.com/watch?v=", "")
              .replace("https://www.youtube.com/", ""),
          });
        } else {
          if (
            (hours == 16 && minutes <= 30) ||
            (hours == 9 && minutes <= 25) ||
            (hours == 13 && minutes <= 20)
          ) {
            var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
            var vid = videoIds4PM2430PM[num]
              .replace("https://www.youtube.com/watch?v=", "")
              .replace("https://www.youtube.com/", "");
            this.room.vid = vid;
            //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
            /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
              console.log("Playing video: " + info.videoDetails.title);
              if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (
                info.videoDetails.title.match(/Microsoft Agent/gi) ||
                info.videoDetails.title.match(/MSAgent/gi) ||
                info.videoDetails.title.match(/PGG Rebooted/g) ||
                info.videoDetails.title.match(/Skits/g) ||
                info.videoDetails.title.match(/BonziBUDDY/g)
              ) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (
                info.videoDetails.title.match(/Clips Tape/g) ||
                info.videoDetails.title.match(/Left 4 Dead/gi) ||
                info.videoDetails.title.match(/How it FEELS/g) ||
                info.videoDetails.title.match(/Gets Grounded/g) ||
                info.videoDetails.title.match(/Brian and Steve/g)
              ) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              }
            });*/
            this.room.emit("replaceTVWithURL", {
              id: videoIds4PM2430PM[num]
                .replace("https://www.youtube.com/watch?v=", "")
                .replace("https://www.youtube.com/", ""),
              identId: bonziTvIdent[ident].replace(
                "https://www.youtube.com/watch?v=",
                ""
              ),
            });
          } else if (hours == 17) {
            var num = Math.floor(Math.random() * videoIds5PM.length);
            var vid = videoIds5PM[num]
              .replace("https://www.youtube.com/watch?v=", "")
              .replace("https://www.youtube.com/", "");
            this.room.vid = vid;
            /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
              console.log("Playing video: " + info.videoDetails.title);
              if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (
                info.videoDetails.title.match(/Microsoft Agent/gi) ||
                info.videoDetails.title.match(/MSAgent/gi) ||
                info.videoDetails.title.match(/PGG Rebooted/g) ||
                info.videoDetails.title.match(/Skits/g) ||
                info.videoDetails.title.match(/BonziBUDDY/g)
              ) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (
                info.videoDetails.title.match(/Clips Tape/g) ||
                info.videoDetails.title.match(/Left 4 Dead/gi) ||
                info.videoDetails.title.match(/How it FEELS/g) ||
                info.videoDetails.title.match(/Gets Grounded/g) ||
                info.videoDetails.title.match(/Brian and Steve/g)
              ) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
                ident = Math.floor(Math.random() * bonziTvIdent.length); 
              }
            });*/
            //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
            this.room.emit("replaceTVWithURL", {
              id: videoIds5PM[num]
                .replace("https://www.youtube.com/watch?v=", "")
                .replace("https://www.youtube.com/", ""),
              identId: bonziTvIdent[ident].replace(
                "https://www.youtube.com/watch?v=",
                ""
              ),
            });
          } else if (hours == 18 && minutes <= 20) {
            var num = Math.floor(Math.random() * videoIds7PM.length);
            var vid = videoIds7PM[num]
              .replace("https://www.youtube.com/watch?v=", "")
              .replace("https://www.youtube.com/", "");
            this.room.vid = vid;
            /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
              console.log("Playing video: " + info.videoDetails.title);
              if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (
                info.videoDetails.title.match(/Microsoft Agent/gi) ||
                info.videoDetails.title.match(/MSAgent/gi) ||
                info.videoDetails.title.match(/PGG Rebooted/g) ||
                info.videoDetails.title.match(/Skits/g) ||
                info.videoDetails.title.match(/BonziBUDDY/g)
              ) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (
                info.videoDetails.title.match(/Clips Tape/g) ||
                info.videoDetails.title.match(/Left 4 Dead/gi) ||
                info.videoDetails.title.match(/How it FEELS/g) ||
                info.videoDetails.title.match(/Gets Grounded/g) ||
                info.videoDetails.title.match(/Brian and Steve/g)
              ) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              }
            });*/
            //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
            this.room.emit("replaceTVWithURL", {
              id: videoIds7PM[num]
                .replace("https://www.youtube.com/watch?v=", "")
                .replace("https://www.youtube.com/", ""),
              identId: bonziTvIdent[ident].replace(
                "https://www.youtube.com/watch?v=",
                ""
              ),
            });
          } else if (hours == 19 && minutes <= 22) {
            var num = Math.floor(Math.random() * videoIds7PM.length);
            var vid = videoIds7PM[num]
              .replace("https://www.youtube.com/watch?v=", "")
              .replace("https://www.youtube.com/", "");
            this.room.vid = vid;
            /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
              console.log("Playing video: " + info.videoDetails.title);
              if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (
                info.videoDetails.title.match(/Microsoft Agent/gi) ||
                info.videoDetails.title.match(/MSAgent/gi) ||
                info.videoDetails.title.match(/PGG Rebooted/g) ||
                info.videoDetails.title.match(/Skits/g) ||
                info.videoDetails.title.match(/BonziBUDDY/g)
              ) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (
                info.videoDetails.title.match(/Clips Tape/g) ||
                info.videoDetails.title.match(/Left 4 Dead/gi) ||
                info.videoDetails.title.match(/How it FEELS/g) ||
                info.videoDetails.title.match(/Gets Grounded/g) ||
                info.videoDetails.title.match(/Brian and Steve/g)
              ) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              }
            });*/
            //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
            this.room.emit("replaceTVWithURL", {
              id: videoIds7PM[num]
                .replace("https://www.youtube.com/watch?v=", "")
                .replace("https://www.youtube.com/", ""),
              identId: bonziTvIdent[ident].replace(
                "https://www.youtube.com/watch?v=",
                ""
              ),
            });
          } else {
            var num = Math.floor(
              Math.random() * videoIds25MinutesofMSAgent.length
            );
            var vid = videoIds25MinutesofMSAgent[num]
              .replace("https://www.youtube.com/watch?v=", "")
              .replace("https://www.youtube.com/", "");
            this.room.vid = vid;
            /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
              console.log("Playing video: " + info.videoDetails.title);
              if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (
                info.videoDetails.title.match(/Microsoft Agent/gi) ||
                info.videoDetails.title.match(/MSAgent/gi) ||
                info.videoDetails.title.match(/PGG Rebooted/g) ||
                info.videoDetails.title.match(/Skits/g) ||
                info.videoDetails.title.match(/BonziBUDDY/g)
              ) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (
                info.videoDetails.title.match(/Clips Tape/g) ||
                info.videoDetails.title.match(/Left 4 Dead/gi) ||
                info.videoDetails.title.match(/How it FEELS/g) ||
                info.videoDetails.title.match(/Gets Grounded/g) ||
                info.videoDetails.title.match(/Brian and Steve/g)
              ) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
                bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
                ident = Math.floor(Math.random() * bonziTvIdent.length);
              }
            });*/
            //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
            this.room.emit("replaceTVWithURL", {
              id: videoIds25MinutesofMSAgent[num]
                .replace("https://www.youtube.com/watch?v=", "")
                .replace("https://www.youtube.com/", ""),
              identId: bonziTvIdent[ident].replace(
                "https://www.youtube.com/watch?v=",
                ""
              ),
            });
          }
        }
        bonziTvCool = true;
        setTimeout(function () {
          bonziTvCool = false;
        }, 20000);
      }
    });

    this.socket.on("setbonzitvtime", (data) => {
      this.room.curtime = data.curtime;
    }),
      this.socket.on("vote", (parameters) => {
        if (typeof parameters != "boolean") return;
        this.room.pollvotes[this.public.guid] = parameters;
        var yes = 0,
          no = 0,
          votes = 0,
          voteArray = Object.keys(this.room.pollvotes);
        for (var i = 0; i < voteArray.length; ++i) {
          ++votes;
          if (this.room.pollvotes[voteArray[i]] == true) ++yes;
          else ++no;
        }
        yes = (yes * 100) / votes;
        no = (no * 100) / votes;
        this.room.emit("pollupdate", { yes: yes, no: no, votecount: votes });
      });

    //Deconstruct the user on disconnect
    this.socket.on("disconnect", () => {
      userips[this.socket.IP]--;
      if (userips[this.socket.IP] == 0) delete userips[this.socket.IP];
      if (this.loggedin) {
        delete this.room.usersPublic[this.public.guid];
        this.room.emit("leave", { guid: this.public.guid });
        this.room.users.splice(this.room.users.indexOf(this), 1);
        this.room.emit("serverdata", { count: this.room.users.length });
        clearInterval(this.nuked);
        delete users[this.public.guid];
        if (this.room.owner) {
          if (this.room.users.length == 0) {
            delete rooms[this.room.name];
            delete this.room;
          } else if (this.room.owner == this.public.guid) {
            var newOwner =
              this.room.users[
                Math.round(Math.random() * (this.room.users.length - 1))
              ];
            this.room.owner = newOwner.public.guid;
            newOwner.socket.emit("room", {
              isOwner: true,
              isPublic: false,
              room: this.room.name,
              vid: this.room.vid,
              curtime: this.room.curtime,
            });
            if (newOwner.level < 1) {
              newOwner.level = 1;
              newOwner.socket.emit("authlv", { level: 1 });
            }
          }
        }
      }
    });

    //COMMAND HANDLER
    this.socket.on("command", (cmd) => {
      //parse and check
      if (cmd.list[0] == undefined || this.muted != 0) return;
      var comd = cmd.list[0];
      var param = "";
      if (cmd.list[1] == undefined) param = [""];
      else {
        param = cmd.list;
        param.splice(0, 1);
      }
      param = param.join(" ");
      //filter
      if (typeof param !== "string") return;
      if (this.sanitize)
        param = param
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\[\[/g, "&#91;&#91;");
      if (filtertext(param) && this.sanitize) return;
      //carry it out
      if (!this.slowed) {
        if (commands[comd] !== undefined) commands[comd](this, param);
        //Smlowmode
        this.slowed = true;
        setTimeout(() => {
          this.slowed = false;
        }, config.slowmode);
      }
    });

    this.socket.on("typing", (type) => {
      if (this.muted != 0 || typeof this.room == "undefined") return;
      switch (type.state) {
        case 0:
          this.public.typing = "";
          break;
        case 1:
          this.public.typing = " was typing...";
          break;
        case 2:
          this.public.typing = " was commanding...";
          break;
      }
      this.room.emit("update", {
        guid: this.public.guid,
        userPublic: this.public,
      });
    });
  }
}
//Simple room template
class room {
  constructor(name) {
    //Room Properties
    this.name = name;
    this.users = [];
    this.usersPublic = {};
    this.pollvotes = {};
    this.owner = 0;
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (hours == 16 && minutes <= 30) {
      var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
      var vid = videoIds4PM2430PM[num]
        .replace("https://www.youtube.com/watch?v=", "")
        .replace("https://www.youtube.com/", "");
      this.vid = vid;
    } else if (hours == 17) {
      var num = Math.floor(Math.random() * videoIds5PM.length);
      var vid = videoIds5PM[num]
        .replace("https://www.youtube.com/watch?v=", "")
        .replace("https://www.youtube.com/", "");
      this.vid = vid;
    } else if (hours == 14) {
      var num = Math.floor(Math.random() * videoIds5PM.length);
      var vid = videoIds5PM[num]
        .replace("https://www.youtube.com/watch?v=", "")
        .replace("https://www.youtube.com/", "");
      this.vid = vid;
    } else if (hours == 18 && minutes <= 30) {
      var num = Math.floor(Math.random() * videoIds7PM.length);
      var vid = videoIds7PM[num]
        .replace("https://www.youtube.com/watch?v=", "")
        .replace("https://www.youtube.com/", "");
      this.vid = vid;
    } else if (hours == 19) {
      var num = Math.floor(Math.random() * videoIds7PM.length);
      var vid = videoIds7PM[num]
        .replace("https://www.youtube.com/watch?v=", "")
        .replace("https://www.youtube.com/", "");
      this.vid = vid;
    } else {
      var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
      var vid = videoIds25MinutesofMSAgent[num]
        .replace("https://www.youtube.com/watch?v=", "")
        .replace("https://www.youtube.com/", "");
      this.vid = vid;
    }
  }
  //Function to emit to every room member
  emit(event, msg, sender) {
    this.users.forEach((user) => {
      if (user !== sender) user.socket.emit(event, msg);
    });
  }
}

//Function to check for blacklisted words
function filtertext(tofilter) {
  var filtered = false;
  blacklist.forEach((listitem) => {
    if (tofilter.includes(listitem)) filtered = true;
  });
  return filtered;
}

function isPublicRoom(id) {
  return id == "default";
}
