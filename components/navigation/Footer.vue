<template>
    <ul class="footer">
        <li>© 1995–{{new Date().getFullYear()}} {{$t('UniversityOfficialName')}}<br />
            {{$t('Copyright')}}
            <br />
              <span class="hidden-print">
              {{$t('Founder')}} — <a href="http://minobrnauki.gov.ru/" rel="nofollow">{{$t('Ministry')}}</a><br>
            </span>
        </li>
        <li>
            <div v-html="$t('UniversityAddress').toString()"></div>
        </li>
    </ul>
</template>
