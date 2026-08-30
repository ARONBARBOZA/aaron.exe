document.getElementById('panel-bucket').innerHTML = `
      <div class="page-wrap narrow">
        <p class="lead">Things I want to do before I die.</p>

        <div class="bucket-progress">
          <p class="eyebrow" style="margin-bottom:0;">Progress</p>
          <p class="bucket-progress-label"><span id="bucketDoneCount">0</span> / <span id="bucketTotalCount">0</span> done</p>
          <div class="bucket-progress-bar"><div class="bucket-progress-fill" id="bucketProgressFill"></div></div>
        </div>

        <ul class="bucket-list" id="bucketList">
          <li><button class="bucket-item" type="button"><span class="bucket-check"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="bucket-label">Take my family on a foreign trip</span></button></li>
          <li><button class="bucket-item" type="button"><span class="bucket-check"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="bucket-label">Travel across every state in India</span></button></li>
          <li><button class="bucket-item done" type="button"><span class="bucket-check"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="bucket-label">Build my own house</span></button></li>
          <li><button class="bucket-item" type="button"><span class="bucket-check"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="bucket-label">Live in another country for a month</span></button></li>
          <li><button class="bucket-item done" type="button"><span class="bucket-check"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="bucket-label">Travel internationally</span></button></li>
          <li><button class="bucket-item" type="button"><span class="bucket-check"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="bucket-label">Build a strong, healthy physique</span></button></li>
          <li><button class="bucket-item" type="button"><span class="bucket-check"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="bucket-label">Own a restaurant</span></button></li>
          <li><button class="bucket-item" type="button"><span class="bucket-check"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="bucket-label">Learn to cook</span></button></li>
          <li><button class="bucket-item done" type="button"><span class="bucket-check"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="bucket-label">Own a car</span></button></li>
          <li><button class="bucket-item" type="button"><span class="bucket-check"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="bucket-label">See all Seven Wonders of the World</span></button></li>
          <li><button class="bucket-item" type="button"><span class="bucket-check"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="bucket-label">Take a solo international trip</span></button></li>
          <li><button class="bucket-item" type="button"><span class="bucket-check"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="bucket-label">Own a piece of land</span></button></li>
        </ul>

        <p class="placeholder" id="bucketHelperText">Slowly becoming the person I want to be.</p>
      </div>
    
`;
