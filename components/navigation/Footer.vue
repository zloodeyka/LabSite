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
            {{$t('PhoneFax')}}: <a href="tel:+7-351-2679900">+7 (351) 267-99-00</a><br>
            E-mail: <a href="mailto:info@susu.ru" processed="processed">info@susu.ru</a><br>
            {{$t('PressDepartment')}}: <a href="mailto:press@susu.ru" processed="processed">press@susu.ru</a><br>
            {{$t('WebsiteSupport')}}: <a href="mailto:univeris@susu.ru" processed="processed">univeris@susu.ru</a>
        </li>
    </ul>
</template>
